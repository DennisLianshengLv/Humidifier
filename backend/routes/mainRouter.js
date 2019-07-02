const express = require('express');
const router = express.Router();

const index = require('./index');
const employee = require('./employeeRouter');
const award = require('./awardRouter');
const certificate = require('./certificateRouter');
const education = require('./educationRouter');
const productExp = require('./productExpRouter');
const productExpRadar = require('./productExpRadarRouter');


router.use('/v1/', index);
router.use('/v1/employee', employee);
router.use('/v1/award', award);
router.use('/v1/certificate', certificate);
router.use('/v1/education', education);
router.use('/v1/productExp', productExp);
router.use('/v1/productExpRadar', productExpRadar);

module.exports = router;