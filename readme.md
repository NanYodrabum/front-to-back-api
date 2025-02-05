# Server

## Step 1 create package 
```bash
npm init -y
```
## Step 2 install package...
```bash
npm install express nodemon cors morgan bcryptjs jsonwebtoken zod prisma
```
```bash
npx prisma init
```

## Step 3 Git
```bash
git init
git add .
git commit -m "message"
```

next step
copy code from repo
only first time
```bash
git remote add origin https://github.com/NanYodrabum/front-to-back-api.git
git branch -M main
git push -u origin main
```
when update code
```bash
git add .
git commit -m "message"
git push
```
## Step 4 update package.json
```json
{
"scripts": {
    "start" : "nodemon index.js"
  },
}
```



## Step 5 use middlewears
```js
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

//Middlewears
app.use(cors()) //Allows cross domain 
app.use(morgan("dev")) //Show log  terminal
app.use(express.json()) //For read json

//Routing

//start server
const PORT = 8003
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
```

## Step 6 Routing and Controllers [Register]
/controllers/auth-controllers.js
```js
exports.register = (req,res,next) => {
    try {
        res.json({message : "Hello register"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Error!!"})
    }
}
```
/routes/auth-routes.js
```js
const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth-controllers")

// @ENDPOINT http://localhost:8003/api/register
router.post("/register", authControllers.register)

//export
module.exports = router
```

## Step 7  Routing and Controllers [Login]
/controllers/auth-controllers.js
```js
exports.login = async (req, res, next) => {
  try {
   
    res.json({ message: "Hello Login" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!!" });
  }
};
```
/routes/auth-routes.js
```js
const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth-controllers")

// @ENDPOINT http://localhost:8003/api/register
router.post("/register", authControllers.register)
router.post("/login",authControllers.login)

//export
module.exports = router
```
## Step 8 Create handle Error
/middlewears/error.js
```js
const handleErrors = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something wrong!!" });
};

module.exports = handleErrors;
```
and use in index.js
```js
const handleErrors = require("./middlewears/error")

//Handle errors
app.use(handleErrors)
```

and change in try catch
```js
exports.login = async (req, res, next) => {
  try {
    res.json({ message: "Hello Login" });
  } catch (error) {
    next(error)
  }
}
```

when update code in Github
```bash
git add .
git commit -m "message"
git push
```

