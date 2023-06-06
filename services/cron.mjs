import {processStatistic} from "./file.mjs";
const cron = require('node-cron');

// export const cronFunction = () => {
//     processStatistic()
// }

 cron.schedule('*/1 * * * *', processStatistic);
