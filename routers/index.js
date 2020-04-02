//importing library
const express = require('express');
const router = express.Router();
const questions = require('./questions/index');
const options = require('./options/index');

//routes
router.use('/questions/', questions);
router.use('/options/', options);

router.get('/*',function(req, res){
    return res.json(404,{
        message: "Bad request!"
    })
});

//exporting module
module.exports = router;