import eventRouter from "./event.mjs";
import statisticRouter from "./statistic.mjs";
import Express from 'express';

const router = Express.Router();

router.use(eventRouter);
router.use(statisticRouter);

export default router;
