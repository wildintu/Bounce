import * as express from 'express';
import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

// router.get('/api/blogs', async (req, res) => {
//     try {
//         let blogs = await DB.Blogs.all();
//         res.json(blogs);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.get('/api/blogs/:id', async (req, res) => {
//     try {
//         let blogs = await DB.Blogs.one(parseInt(req.params.id, 10));
//         res.json(blogs[0]);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.post('/api/blogs', async (req, res) => {
//     let title = req.body.title;
//     let content = req.body.content;
//     let authorid = parseInt(req.body.authorid, 10);
//     let tagid = parseInt(req.body.tagid, 10)
//     try {
//         let blogs = await DB.Blogs.post(title, content, authorid, tagid);
//         res.json(blogs);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.put('/api/blogs/:id?', async (req, res) => {
//     let id = parseInt(req.params.id, 10);
//     let title = req.body.title;
//     let content = req.body.content;
//     let authorid = parseInt(req.body.authorid, 10);
//     try {
//         let blogs = await DB.Blogs.put(id, title, content, authorid);
//         res.json(blogs);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// router.delete('/api/blogs/:id?', async (req, res) => {
//     let id = parseInt(req.params.id, 10);
//     try {
//         let blogs = await DB.Blogs.del(id);
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