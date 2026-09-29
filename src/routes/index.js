const express=require('express');
const router=express.Router();

const v1ApiRoutes=require('./v1/index')

router.use('/v1',v1ApiRoutes); //whenever it'll see v1 as backlink then it'll call map to all routes of v1ApiRoutes
// router.use('/v2',v2ApiRoutes); -->incase made this in future

module.exports= router;