import {processStatistic} from "./file.mjs";
import cron from 'node-cron';

const cronFnct = () =>{cron.schedule('* * * * *', processStatistic)};
export default cronFnct;
// '*/1 * * * *'
