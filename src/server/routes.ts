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

router.get('/session/:id', async (req, res) => {
    try {
        let session = await DB.session.getOneSession(parseInt(req.params.id, 10));
        res.json(session[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/session', async (req, res) => {
    // let userid = parseInt(req.body.userid, 10);
    let origUserName = req.body.origUserName;
    let origUserPost = req.body.origUserPost;
    let ideaType = req.body.ideaType;
    try {
        let session = await DB.session.postOneSession(origUserName, origUserPost, ideaType);
        res.json(session);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/session/:id?', async (req, res) => {
    // let userid = parseInt(req.params.id, 10);
    let origUserName = req.body.origUserName;
    let origUserPost = req.body.origUserPost;
    let ideaType = req.body.ideaType;
    let id = parseInt(req.body.id, 10);
    console.log(id)
    try {
        let session = await DB.session.updateOneSession(origUserName, origUserPost, ideaType, id);
        res.json(session);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// router.delete('/session/:id?', async (req, res) => {
//     let id = parseInt(req.params.id, 10);
//     try {
//         let sessions = await DB.Sessions.del(id);
//         res.json(sessions);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.get('/input', async (req, res) => {
//     try {
//         let input = await DB.Input.tAll();
//         res.json(input);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.get('/input/:id', async (req, res) => {
//     try {
//         let input = await DB.Ideas.tOne(parseInt(req.params.id, 10));
//         res.json(input);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

export default router;