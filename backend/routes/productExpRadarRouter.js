let express = require('express');
let router = express.Router();

let productExpRadarService = require('../Service/productExpRadarService');
let package = require('../utils/ResPackage');

router.put('/one/:id/:employeeName', function(req, res, next) {
  let response = new package();
  productExpRadarService.addNewProductExpRadar(req.params.id, req.params.employeeID)
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
  productExpRadarService.addNewProductExpRadarItem(req.params.id,req.query)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithData(err);
    res.send(JSON.stringify(response));
  });
});

router.put('/oneitemproperty/:id/:productName', function(req, res, next) {
    let response = new package();
    productExpRadarService.addNewProductExpRadarItemProperty(req.params.id,req.params.productName,req.query)
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
  productExpRadarService.getProductExpRadarInfo(req.params.id)
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
  productExpRadarService.getSearchProductExpRadarInfo(req.query)
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
  productExpRadarService.deleteProductExpRadar(req.params.id)
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
  productExpRadarService.deleteProductExpRadarItem(req.params.id,req.query)
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
  productExpRadarService.deleteProductExpRadars(req.query)
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
  productExpRadarService.updateProductExpRadar(req.params.id,req.query)
  .then((result)=>{
    response.fillResWithData(result);
    res.send(JSON.stringify(response));
  },(err)=>{
    response.fillResWithError(err);
    res.send(JSON.stringify(response));
  });
});


module.exports = router;
