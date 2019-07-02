let express = require('express');
let router = express.Router();

let educationService = require('../Service/educationService');
let package = require('../utils/ResPackage');

router.put('/one/:id/:employeeName', function(req, res, next) {
  let response = new package();
  educationService.addNewEducation(req.params.id, req.params.employeeID)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithData(err);
    res.send(JSON.stringify(response));
  });
});

router.put('/oneitem/:id', function(req, res, next) {
  let response = new package();
  educationService.addNewEducationItem(req.params.id,req.query)
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
  educationService.getEducationInfo(req.params.id)
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
  educationService.getSearchEducationInfo(req.query)
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
  educationService.deleteEducation(req.params.id)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});

//http://localhost:3000/v1/award/oneaward/{id}?award=Innovation
router.delete('/oneitem/:id', function(req, res, next) {
  let response = new package();
  educationService.deleteEducationItem(req.params.id,req.query)
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
  educationService.deleteEducations(req.query)
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
  educationService.updateEducation(req.params.id,req.query)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});


module.exports = router;
