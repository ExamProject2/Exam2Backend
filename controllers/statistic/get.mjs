import fs from "fs";
import {readStatFile} from "../../services/file.mjs";

export async function readFileAsArray (request,response){
    const data = readStatFile();

    response.status(200).send(data ? data : []);
}
