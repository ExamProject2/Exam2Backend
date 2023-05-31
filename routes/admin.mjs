let express = require('express');
let router = express.Router();

const adminController = require('../controllers/statistic/get.mjs');

router.get('/info', adminController.getAdminInfo)
router.post('/info', function(request, response, next){
    const query = request.query;
    const params = request.params;
    const headers = request.headers;
    const data = request.body;
    console.log('query', query);
    console.log('params', params);
    console.log('headers', headers);
    console.log('data', data);
    response.json(true).status(201)
})

router.delete('/info', function(request, response, next){
    const data = request.body;
    const params = request.params;
    console.log('params', params);
    console.log('data', data);
    response.status(201).json({data:'info'})
})

router.delete('/:id', function(request, response, next){
    const data = request.body;
    const params = request.params;
    console.log('params', params);
    console.log('data', data);
    response.status(204).json({data:'id'})
})

router.get('/redirect', function(req, res){
    res.redirect("https://google.com")
})

router.get('/error', function (req, res){
    res.send('error!').status(401);
})

module.exports = router;
