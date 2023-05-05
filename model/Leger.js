const mongoose = require('mongoose')

const legerSchema = new mongoose.Schema({
    total_income: {
        type: String,
       default:0
    },
    total_expence: {
        type: Date,
        default:0
    },
   
    total_amount: {
        type: Number,
        default:0
    }
   
})

module.exports = mongoose.model('leger',legerSchema)