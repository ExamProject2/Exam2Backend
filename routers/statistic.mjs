import * as statisticGetController from '../controllers/statistic/get.mjs'
import Express from 'express';
import {readFileAsArray} from "../controllers/statistic/get.mjs";
// import {cronFunction} from "../services/cron.mjs";
// const cron = require('cron');
// const cronFunction = require('../services/cron.mjs');

const statisticRouter = Express.Router();

statisticRouter.get('/statistic', statisticGetController.readFileAsArray);

// const cronJob = new cron.CronJob('*/1 * * * *', cronFunction);
//
// statisticRouter.get('/start-cron', (req, res) => {
//     cronJob.start(); // Запустить Cron
//     res.send('Cron job started!');
// });
//
// statisticRouter.get('/stop-cron', (req, res) => {
//     cronJob.stop(); // Остановить Cron
//     res.send('Cron job stopped!');
// });

export default statisticRouter;
