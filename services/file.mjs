import fs from "fs";

export const appendLog = (logData) => {
    try{
        if(!Array.isArray(logData) || logData.length === 0){
            return true;
        }

        fs.appendFileSync("eventLog.txt", JSON.stringify(logData)+'\r\n');

        return true;
    }catch(err){
        console.log('StatAddError', err);
        return false;
    }
}
export const processStatistic = () => {
    try{
        if (!fs.existsSync('eventLog.txt')) {
            console.log('Файл не существует.');
            return;
        }
        fs.renameSync('eventLog.txt', 'process_eventLog.txt');
        let targetList = null;
        const data = fs.readFileSync('process_eventLog.txt', 'utf8');
        const lines =data.split(/\r?\n/);
        const result=[];

        for(let item of lines){
            console.log(`line => [${item}]`);
            if(typeof item === "string" && item){
                let obj = JSON.parse(item);
                if(obj && Array.isArray(obj) && obj.length>0){
                    result.push(obj)
                }
            }
        }
console.log(result);
        const prevStat = readStatFile();
        const objMap = new Map();

        if (prevStat) {
            for (const obj of prevStat) {
                objMap.set(obj.target, obj)
            }
        }

        for (const row of result) {
            for (const obj of row) {
                if (objMap.has(obj.target)) {
                    const objTarget = objMap.get(obj.target);
                    objTarget.count++;
                } else {
                    objMap.set(obj.target, obj)
                }
            }
        }

        targetList = [...objMap.values()];
        if (targetList){
            fs.writeFileSync('stat_eventLog.txt', JSON.stringify(targetList));
        }
        fs.unlinkSync('process_eventLog.txt')
    }catch(err){
        console.log('FileError', err);
    }
}

export const readStatFile = () => {
    try{
        if(!fs.existsSync('stat_eventLog.txt')) {
            console.log('Файл не существует.');
            return null;
        }

        let fileContent = fs.readFileSync('stat_eventLog.txt', 'utf8');
        fileContent=JSON.parse(fileContent);

        return Array.isArray(fileContent) ? fileContent : null;
    }catch(err){
        console.log('StatReadError', err);
        return null;
    }

}

