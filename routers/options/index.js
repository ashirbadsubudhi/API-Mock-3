//importing library
const express = require('express');
const router = express.Router();

const optionssController = require('../../controllers/optionsController');

router.delete('/:id/delete/', optionssController.delete);
router.post('/:id/add_vote/', optionssController.addVote);

//exporting module
module.exports = router;