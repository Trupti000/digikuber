const Income = require("../model/Income")

exports.getIncomeById = async (req,res)=>{
    try {
        const data = await Income.findById(req.params.id);
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.getIncome = async (req,res)=>{
    try {
        const data = await Income.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postIncome = async (req,res)=>{
    try {
        const newincome = new Income(req.body)
        const data = await newincome.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putIncome = async (req,res)=>{
    try {
        const data = await Income.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteIncome= async (req,res)=>{
    try {
        const data = await Income.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}