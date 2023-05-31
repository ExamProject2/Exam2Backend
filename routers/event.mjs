import * as eventPostController from '../controllers/event/post.mjs';
import Express from 'express';
import {saveStatistic} from "../controllers/event/post.mjs";

const eventRouter = Express.Router();

eventRouter.post('/event', eventPostController.saveStatistic);
export default eventRouter;
