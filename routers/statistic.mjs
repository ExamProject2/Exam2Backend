import * as statisticGetController from '../controllers/statistic/get.mjs'
import Express from 'express';
import {readFileAsArray} from "../controllers/statistic/get.mjs";

const statisticRouter = Express.Router();

statisticRouter.get('/statistic', statisticGetController.readFileAsArray);
export default statisticRouter;
