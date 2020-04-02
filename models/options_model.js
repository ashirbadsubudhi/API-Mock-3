//importing library
const mongoose = require('mongoose');

//creating options schema
const optionsSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    votes:{
        type: Number,
        default: 0
    },
    link_to_vote:{
        type: String,
        default: null
    },
    questionID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Question'
    }
},{
    versionKey: false
});

const Options = mongoose.model('Options', optionsSchema);

//exporting module
module.exports = Options;