let express = require('express');
let router = express.Router();

let awardService = require('../Service/awardService');
let package = require('../utils/ResPackage');

router.put('/one/:id/:employeeName', function(req, res, next) {
  let response = new package();
  awardService.addNewAward(req.params.id, req.params.employeeID)
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
  awardService.addNewAwardItem(req.params.id,req.query)
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
  awardService.getAwardInfo(req.params.id)
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
  awardService.getSearchAwardInfo(req.query)
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
  awardService.deleteAward(req.params.id)
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
  awardService.deleteAwardItem(req.params.id,req.query)
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
  awardService.deleteAwards(req.query)
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
  awardService.updateAward(req.params.id,req.query)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});


module.exports = router;
