import {readStatFile} from "./file.mjs";
const cron = require('node-cron');

cron.schedule('*/10 * * * *', (readStatFile) => {
    readStatFile();
});
