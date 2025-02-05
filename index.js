const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const handleErrors = require("./middlewears/error")

//Routing
const authRouter = require("./routes/auth-routes")

//Middlewears
app.use(cors()) //Allows cross domain 
app.use(morgan("dev")) //Show log  terminal
app.use(express.json()) //For read json

//Routing
app.use("/api", authRouter)


//Handle errors
app.use(handleErrors)

//start server
const PORT = 8003
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

