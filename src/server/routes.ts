import * as express from 'express';
import DB from './db';

const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

router.get('/session', async (req, res) => {
    try {
        let session = await DB.session.getAllSession();
        res.json(session);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/session/:sessionid', async (req, res) => {
    try {
        let session = await DB.session.getOneSession(parseInt(req.params.sessionid, 10));
        res.json(session[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/session', async (req, res) => {
    let origUserName = req.body.origUserName;
    let origUserPost = req.body.origUserPost;
    let ideaType = req.body.ideaType;
    try { 
        let session: any = await DB.session.postOneSession(origUserName, origUserPost, ideaType);
        let origId: any = await DB.input.postOneInput(session.insertId)
        res.json(session);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/session/:sessionid?', async (req, res) => {
    let origUserName = req.body.origUserName;
    let origUserPost = req.body.origUserPost;
    let ideaType = req.body.ideaType;
    let sessionid = parseInt(req.params.sessionid, 10);
    try {
        let session = await DB.session.updateOneSession(origUserName, origUserPost, ideaType, sessionid);
        res.json(session);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/session/:sessionid?', async (req, res) => {
    let sessionid = parseInt(req.params.sessionid, 10);
    try {
        let sessions = await DB.session.deleteSession(sessionid);
        res.json(sessions);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/session/:sessionid?/input', async (req, res) => {
    try {
        let input = await DB.input.getAllInput();
        res.json(input);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/session/:sessionid?/input/:inputid?', async (req, res) => {
    try {
        let input = await DB.input.getOneInput(parseInt(req.params.inputid, 10));
        res.json(input);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/session/:sessionid?/input', async (req, res) => {
    let origId = parseInt(req.params.sessionid, 10);
    let secName = req.body.secName;
    let secInput = req.body.secInput;
    try {
        let session = await DB.input.putToOrigId(origId, secName, secInput);
        res.json(session);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/session/:sessionid?/input/:inputid?', async (req, res) => {
    let origId = parseInt(req.params.sessionid, 10);
    let secName = req.body.secName;
    let secInput = req.body.secInput;
    let inputid = parseInt(req.params.inputid, 10);
    console.log(inputid)
    try {
        let session = await DB.input.updateOneInput(origId, secName, secInput, inputid);
        res.json(session);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;