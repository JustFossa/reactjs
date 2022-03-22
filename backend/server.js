const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})

const exercisesRouter = require("./routes/exercises")
const usersRouter = require("./routes/users")

app.use(cors())
app.use(express.json())
app.use("/exercises", exercisesRouter)
app.use("/users", usersRouter)



const connection = mongoose.connection

connection.once('open', () => {
    console.log("Successfully connected to the DB!")
})

app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`)
})

