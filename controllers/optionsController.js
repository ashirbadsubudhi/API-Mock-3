// importing required libraries.
const Option = require('../models/options_model');
const Question = require('../models/question_model');


//delete module
module.exports.delete = async function(req, res){
    try{
        let option = await Option.findByIdAndDelete(req.params.id);
        let question = await Question.findByIdAndUpdate(option.questionID, {$pull: {options: req.params.id}});
        return res.json(200, {
            data: {
                message: "Option deleted"
            }
        });
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}

//addVote module
module.exports.addVote = async function(req, res){
    try{
        let option = await Option.findById(req.params.id);
        option.votes = option.votes + 1;
        option.save();
        return res.json(200, {
            data: {
                message: "Voted sucessfully"
            }
        });
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}