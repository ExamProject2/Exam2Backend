import fs from "fs";

export const appendLog = (logData) => {
    fs.appendFileSync("eventLog.txt", JSON.stringify(logData)+'\r\n');
    return true;
}
export const readFile = () => {
    fs.rename('eventLog.txt', 'process_eventLog.txt', ()=>{
        try{
            fs.readFile('process_eventLog.txt', 'utf8', function(error, data){
                if(error){
                    console.log(error);
                }
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
                const objMap = new Map();
                for (const obj of result) {
                    if (objMap.has(obj.target)) {
                        const objTarget = objMap.get(obj.target);
                        objTarget.count++;
                    } else {
                        objMap.set(obj.target, obj)
                    }
                }
                const targetList = [...objMap.values()];
                return result === true;
            });
        }catch(e){
            return null;
        }
    })
}

export const readStatFile = () => {
    fs.readFile('stat_eventLog.txt', 'utf8', function(error, data){
        return data;
    })
}

