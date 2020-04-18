import * as express from 'express';

import DB from '../db';

const router = express.Router();

router.get('/:colorid?', async (req, res) => {
    let colorid = parseInt(req.params.colorid, 10);
    if (colorid) {
        try {
            res.json((await DB.colors.getOneColor(colorid))[0])
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await DB.colors.getColors())
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
})

router.post('/', async (req, res) => {
    try {
        res.json(await DB.colors.postColors(req.body.color))
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})


export default router;