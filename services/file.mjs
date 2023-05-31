import fs from "fs";

export const appendLog = (logData) => {
    fs.appendFileSync("eventLog.txt", JSON.stringify(logData)+'\r\n');
    return true;
}
export const readFile = () => {
    try{
        fs.readFile('eventLog.txt', 'utf8', function(error, data){
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
            return result === true;
        });
    }catch(e){
        return null;
    }
}
