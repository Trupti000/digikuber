
const { getIncome, postIncome, putIncome, deleteIncome } = require('../Controller/incoController')


// router fun add
const route = require('express').Router()


// all methods routes
route.get('/', getIncome)

route.post('/',postIncome)

route.put('/:id',putIncome)

route.delete('/:id',deleteIncome)


// export route
module.exports = route