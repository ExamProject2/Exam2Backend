var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/hello', function(request, response){
    console.log('Hello');
    response.send('Hello!!!');
    response.redirect('https://expressjs.com/ru/4x/api.html#req');
})

router.post('/postRequest', function(request, response){
    console.log('postRequest!');
    response.json(['Katya', 'Misha', 'Olya']).status(201);
})

router.head('/headRequest', function (request, response){
    console.log('headRequest!');
    response.headersSent;
})

router.put('/putRequest', function (request, response){
    let withError = request.query.withError;
    // response.append('/putRequest', '?withError=1')
    response.status(404).send('With Error' + withError);
})

router.get('/xhrRequest', function (request, response){
    if(request.query.withError === '1'){
        response.status(500).send('with Error');
    }else{
        response.send('Success')
    }
})

router.post('/event-log', function (request, response){
    const eventLogBody = request.body;
    fs.appendFileSync("eventLog.txt", JSON.stringify(eventLogBody)+'\r\n');
    response.status(200).send();
})

// router.post('/file/get-as-array', function(request,response){
//     try{
//         fs.readFile('eventLog.txt', 'utf8', function(error, data){
//             if(error){
//                 console.log(error);
//             }
//             const lines =data.split(/\r?\n/);
//             const result=[];
//             for(let item of lines){
//                 console.log(`line => [${item}]`);
//                 if(typeof item === "string" && item){
//                     let obj = JSON.parse(item);
//                     if(obj && Array.isArray(obj) && obj.length>0){
//                         result.push(obj)
//                     }
//                 }
//             }
//             // const lines = data.split('\n').map(line => line.trim());
//             response.status(200).json(result);
//         });
//     }catch(e){
//         return response.status(404).send({...error});
//     }
//
// })

const eventController = require('../controllers/event/post.mjs');
router.get('/readFile', eventController.readFileAsArray)

module.exports = router;
