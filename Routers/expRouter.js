
const { getExpence, postExpence, putExpence, deleteExpence } = require('../Controller/expController')


// router fun add
const route = require('express').Router()


// all methods routes
route.get('/',getExpence)

route.get('/byid/:id',getExpence)

route.post('/',postExpence)

route.put('/:id',putExpence)

route.delete('/:id',deleteExpence)


// export route
module.exports = route