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

router.post('/', async (req, res) => {
    let origUserName = req.body.origUserName;
    let origUserPost = req.body.origUserPost;
    let ideaType = req.body.ideaType;
    try {
        let session: any = await DB.session.postOneSession(origUserName, origUserPost, ideaType);
        console.log(session);
        let origId: any = await DB.input.postOneInput(session.insertId, origUserName, origUserPost, 1);
        let nodeId: any = await DB.input.updateNodeId(origId.insertId, origId.insertId)
        res.json(session);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

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

router.post('/:sessionid?/input', async (req, res) => {
    // let origId = parseInt(req.params.sessionid, 10);
    let origId = parseInt(req.params.sessionid, 10)
    let secName = req.body.secName;
    let secInput = req.body.secInput;
    let nodeId = parseInt(req.body.nodeId, 10);
    let level = parseInt(req.body.level, 10);
    try {
        let input = await DB.input.putToOrigId(origId, secName, secInput, nodeId, level);
        res.json(input);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

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

router.delete('/:sessionid?/input/:inputid?', async (req, res) => {
    let inputid = parseInt(req.params.inputid, 10);
    let origId = parseInt(req.params.sessionid, 10);
    let i = 0;
    try {
        let [start] = await DB.input.filterInput(origId,inputid);
        // let [start]: any = await DB.input.filterLevel(origId, inputid, 1);
        let count: number = parseInt(start.level, 10)+1;
        let nodeid: any = parseInt(start.id, 10);
        let input = await DB.input.deleteInput(inputid, origId);
        
        while(i !== 1) {
            let search: any = await DB.input.filterLevel(origId, nodeid, count);
            // console.log(search)
            if (search.length !== 0) {
                search.forEach(async (element: any) => {
                    nodeid = parseInt(element.id, 10);
                    count = parseInt(element.level, 10)+1;
                    let cullNodes = await DB.input.deleteInput(nodeid, origId);
                    // console.log(element)
                })
            } else {
                i = 1           
            }
        }
        // filter.forEach(async (element: any) => {
        //     // let cullNodes = await DB.input.deleteOtherInput(element.id, origId)
        // })
        // res.json(input);
        res.sendStatus(200)
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})


export default router;