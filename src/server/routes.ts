import * as express from 'express';
import DB from './db';

const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

// router.get('/', async (req, res) => {
//     try {
//         let sessions = await DB.sessions.all();
//         res.json(sessions);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.get('/sessions/:id', async (req, res) => {
//     try {
//         let sessions = await DB.session.one(parseInt(req.params.id, 10));
//         res.json(sessions[0]);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.post('/sessions', async (req, res) => {
//     let name = req.body.name;
//     let description = req.body.description;
//     let displayType = parseInt(req.body.authorid, 10);
//     let id = parseInt(req.body.tagid, 10)
//     try {
//         let sessions = await DB.Sessions.post(name, description, displayType, id);
//         res.json(sessions);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.put('/sessions/:id?', async (req, res) => {
//     let id = parseInt(req.params.id, 10);
//     let name = req.body.name;
//     let description = req.body.description;
//     let displayType = parseInt(req.body.authorid, 10);
//     try {
//         let sessions = await DB.Sessions.put(id, name, description, dislayType);
//         res.json(sessions);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.delete('/essions/:id?', async (req, res) => {
//     let id = parseInt(req.params.id, 10);
//     try {
//         let sessions = await DB.Sessions.del(id);
//         res.json(blogs);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.get('/api/tags', async (req, res) => {
//     try {
//         let tags = await DB.Tags.tAll();
//         res.json(tags);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.get('/api/tags/:id', async (req, res) => {
//     try {
//         let tags = await DB.Tags.tOne(parseInt(req.params.id, 10));
//         res.json(tags);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

export default router;