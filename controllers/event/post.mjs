import {appendLog} from "../../services/file.mjs";
export async function saveStatistic (request,response){
    if(appendLog(request.body)){
        response.status(201).send();
    }else{
        response.status(400).send();
    }
}
