//importing library
const express = require('express');
const router = express.Router();

const questionsController = require('../../controllers/questionsController');

router.post('/create/', questionsController.create);
router.get('/:id/', questionsController.find);
router.delete('/:id/delete/', questionsController.delete);
router.post('/:id/options/create/', questionsController.createOptions);

//exporting module
module.exports = router;