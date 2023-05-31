import fs from "fs";
import {appendLog, readFile} from "../../services/file.mjs";

export async function readFileAsArray (request,response){
    if(readFile()){
        response.status(200).send();
    }else{
        response.status(400).send();
    }
}

