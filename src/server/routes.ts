import * as express from 'express';
import DB from './db';

const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

// router.get('/', async (req, res) => {
//     try {
//         let session = await DB.session.all();
//         res.json(session);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.get('/session/:id', async (req, res) => {
//     try {
//         let session = await DB.session.one(parseInt(req.params.id, 10));
//         res.json(session[0]);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.post('/session', async (req, res) => {
//     let name = req.body.name;
//     let description = req.body.description;
//     let displayType = parseInt(req.body.authorid, 10);
//     let id = parseInt(req.body.tagid, 10)
//     try {
//         let session = await DB.Session.post(name, description, displayType, id);
//         res.json(session);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.put('/session/:id?', async (req, res) => {
//     let id = parseInt(req.params.id, 10);
//     let name = req.body.name;
//     let description = req.body.description;
//     let displayType = parseInt(req.body.authorid, 10);
//     try {
//         let session = await DB.Sessions.put(id, name, description, dislayType);
//         res.json(session);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

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