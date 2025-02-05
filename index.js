const express = require("express")


const app = express()

app.use(express.json())

PORT = 8003

app.listen(PORT => console.log("Server run on Port 8003"))

