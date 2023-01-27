const express = require("express");
const cors = require('cors')
const app = express()
const port = 8000
// const { sequelize } = require('./database/models/data')
// const dataRouter = require('./routes/data')
const bodyParser = require('body-parser')

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// sequelize.authenticate().then(() => {
//     console.log(`Success connecting database`);
// })

// app.use('/', dataRouter)

const appRoute = require('./routes/data')
app.use('/', appRoute)


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
