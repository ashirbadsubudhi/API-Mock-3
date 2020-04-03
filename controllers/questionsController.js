// importing required libraries.
const Question = require('../models/question_model');
const Option = require('../models/options_model');

//create module
module.exports.create = async function(req, res){
    try{
        let question = await Question.create(req.body);
        return res.json(200,{
            data: question
        });
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}

//find module
module.exports.find = async function(req, res){
    try{
        let question = await Question.findById(req.params.id);
        let option = await Option.find({_id: question.options});
        return res.json(200, {
            question,
            option
        });
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}

//delete module
module.exports.delete = async function(req, res){
    try{
        let question = await Question.findById(req.params.id);
        let option = await Option.find({_id: question.options});
        let flag = false;
        option.forEach(function(element) {
            if(element.votes > 0){
                flag = true;
            }
        });
        if(flag){
            return res.json(500, {
                data:{
                    message: "Can't delete"
                }
            });
        }
        else{
            question = await Question.findByIdAndDelete(req.params.id);
            option = await Option.deleteMany({_id: question.options});
            return res.json(200, {
                data: {
                    message: "Question deleted"
                }
            });
        }
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}

//create module for options
module.exports.createOptions = async function(req, res){
    try{
        let question = await Question.findById(req.params.id);
        let option = await Option.create(req.body);
        question.options.push(option);
        question.save();
        option.questionID = req.params.id;
        option.link_to_vote = 'http://localhost:8000/options/'+option._id+'/add_vote';
        option.save();
        return res.json(200, {
            option
        })
    }
    catch(err){
        return res.json(400,{
            message: "DB error!!"
        });
    }
}
