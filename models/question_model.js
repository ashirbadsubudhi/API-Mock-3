//importing library
const mongoose = require('mongoose');


//creating question schema
const questionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    options: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Options'
    }]
},{
    versionKey: false
});

const Question = mongoose.model('Question', questionSchema);

//exporting module
module.exports = Question;