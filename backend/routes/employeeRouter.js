let express = require('express');
let router = express.Router();

let employeeService = require('../Service/employeeService');
let package = require('../utils/ResPackage');

router.put('/one/:name/:team/:product/:gender/:title', function(req, res, next) {
  let response = new package();
  employeeService.addNewEmployee(req.params.name, req.params.team, req.params.product, req.params.title, req.params.gender)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithData(err);
    res.send(JSON.stringify(response));
  });
});

router.get('/one/:id', function(req, res, next) {
  let response = new package();
  employeeService.getEmployeeInfo(req.params.id)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});

router.get('/any', function(req, res, next) {
  let response = new package();
  employeeService.getSearchEmployeeInfo(req.query)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});

router.delete('/one/:id', function(req, res, next) {
  let response = new package();
  employeeService.deleteEmployee(req.params.id)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});

router.delete('/any', function(req, res, next) {
  let response = new package();
  employeeService.deleteEmployees(req.query)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});

// update
router.post('/one/:id', function(req, res, next) {
  let response = new package();
  employeeService.updateEmployee(req.params.id,req.query)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});


module.exports = router;
