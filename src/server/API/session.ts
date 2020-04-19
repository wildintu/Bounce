import * as express from 'express';

import DB from '../db';

const router = express.Router();

router.get('/:sessionid?', async (req, res) => {
    let sessionid: number = parseInt(req.params.sessionid, 10);
    if (sessionid) {
        try {
            let session = await DB.session.getOneSession(sessionid);
            res.json(session[0]);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            let session = await DB.session.getAllSession();
            res.json(session);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
})

// start change
router.post('/', async (req, res) => {
    let origUserName = req.body.origUserName;
    let origUserPost = req.body.origUserPost;
    let ideaType = req.body.ideaType;
    try {
        let session: any = await DB.session.postOneSession(origUserName, origUserPost, ideaType);
        console.log(session);
        let origId: any = await DB.input.postSessionToInput(session.insertId, origUserName, origUserPost, 1, 1, 0);
        let nodeId: any = await DB.input.updateNodeId(origId.insertId, origId.insertId)
        res.json(session);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})
// end change

router.put('/:sessionid', async (req, res) => {
    let origUserName = req.body.origUserName;
    let origUserPost = req.body.origUserPost;
    let ideaType = req.body.ideaType;
    let sessionid = parseInt(req.params.sessionid, 10);
    try {
        let session = await DB.session.updateOneSession(origUserName, origUserPost, ideaType, sessionid);
        res.json(session);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/:sessionid', async (req, res) => {
    let sessionid = parseInt(req.params.sessionid, 10);
    try {
        let sessions = await DB.session.deleteSession(sessionid);
        res.json(sessions);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:sessionid?/input', async (req, res) => {
    let sessionid = parseInt(req.params.sessionid, 10);
    if (sessionid) {
        try {
            res.json(await DB.input.getInputBySession(sessionid))
        } catch (error) {
            console.log(error);
            res.status(500).json('ERROR!!!!');
        }
    } else {

        try {
            let input = await DB.input.getAllInput();
            res.json(input);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
})

router.get('/:sessionid/input/:inputid', async (req, res) => {
    try {
        let input = await DB.input.getOneInput(parseInt(req.params.inputid, 10));
        res.json(input);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// start change
router.post('/:sessionid?/input', async (req, res) => {
    // let origId = parseInt(req.params.sessionid, 10);
    let origId = parseInt(req.params.sessionid, 10)
    let secName = req.body.secName;
    let secInput = req.body.secInput;
    let nodeId = parseInt(req.body.nodeId, 10);
    let level = parseInt(req.body.level, 10);
    try {
        let [nodeDetails] = await DB.input.getDetailsOfNode(origId, nodeId);
        let branch: string = nodeDetails.branchCount;
        let count: number[] = [];
        let unString = "";
        branch.split("").forEach((element: string) => {
            let num: number = parseInt(element, 10);
            if (Number.isNaN(num) !== true) {
                unString += element
            } else {
                if (Number.isNaN(parseInt(unString, 10)) !== true) {
                    count.push(parseInt(unString, 10));
                }
                unString = "";
            }
        })
        let lastCount: number = (count.slice(-1)[0]) + 1;
        let update = await DB.input.updateBranchCount(origId, nodeId, branch, lastCount)
        let input = await DB.input.postToInput(origId, secName, secInput, nodeId, level, lastCount, 0);
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})
// end change

router.put('/:sessionid?/input/:inputid?', async (req, res) => {
    let origId = parseInt(req.params.sessionid, 10);
    let secName = req.body.secName;
    let secInput = req.body.secInput;
    let inputid = parseInt(req.params.inputid, 10);
    try {
        let input = await DB.input.updateOneInput(origId, secName, secInput, inputid);
        res.json(input);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})
import { decoder } from '../decoder';

router.delete('/:sessionid?/input/:inputid?', async (req, res) => {
    let inputId = parseInt(req.params.inputid, 10);
    let origId = parseInt(req.params.sessionid, 10);
    let loopSwitch = false;

    try {
        let [nodeDetails] = await DB.input.getDetailsOfNode(origId, inputId);
        let targets = decoder(nodeDetails)
        let [mainParentNode] = await DB.input.getDetailsOfNode(origId, nodeDetails.nodeId);
        let branchCount = mainParentNode.branchCount;
        let branch = nodeDetails.branchId.toString() + ',';
        let stringArr = branchCount.split("");
        let stringIndex = stringArr.indexOf(branch.split("")[0]);
        stringArr.splice(stringIndex, branch.length);
        let newBranchCount = stringArr.join("");
  
        let update = await DB.input.deleteFromBranchCount(origId, mainParentNode.id, newBranchCount);
        let parentNodeDeleter = await DB.input.deleteInput(nodeDetails.id, origId);

        if (targets.length !== 0) {
            while (loopSwitch !== true) {
                let mapped = targets.map(async (element: any) => {

                    if (element) {
                        let [childNodeDetails] = await DB.input.getChildrenNodes(origId, element.targetNodeId, element.targetBranchId);
                        let childTargets = decoder(childNodeDetails);
                        let childNodeDeleter = await DB.input.deleteInput(childNodeDetails.id, origId);
                        return (
                            childTargets
                        )
                    } 
                })

                let penders: any = await Promise.all(mapped)
                let results = []
                for (let i = 0; i < penders.length; i++) {
                    if (penders[i]) {
                        results.push(...penders[i])
                    }
                }
                if (results.length !== 0) {
                    targets = results;
                } else {
                    loopSwitch = true;
                }
            }
        } else {
            console.log("no immediate children found")
        }

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})


export default router;