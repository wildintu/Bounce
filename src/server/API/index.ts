import * as express from 'express';

import colorsRouter from './colors';
import sessionRouter from './session';

const router = express.Router();


router.use('/colors', colorsRouter);
router.use('/session', sessionRouter);


export default router;
