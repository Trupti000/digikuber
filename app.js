// import packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

// adding routers
const incoRouter = require('./Routers/incoRouter')
const expRouter = require('./Routers/expRouter')
const legerRouter = require('./Routers/legerRouter')


// inilization
const app = express()


// midd
app.use(express.json())
app.use(cors())

// default get
app.get('/', (req, res) => {
    res.send('This is Backend page')
})

// url
app.use('/api/income', incoRouter)
app.use('/api/expence', expRouter)
app.use('/api/leger', legerRouter)

// listen
app.listen(process.env.PORT)


// connection string
async function main() {
    const res = await mongoose.connect(process.env.DB)
    const data = res.default
    console.log(data.STATES['1']);
}
main()

