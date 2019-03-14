import express from "express"
import bodyParser from "body-parser"
import bcrypt from "bcryptjs"

const router = express.Router()
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

router.post('/auth/login', jsonParser, (req, res) => {
  console.clear()
  console.log(req.body)
  const {user, pass} = req.body
  if(user === "Pranav") {
    bcrypt.compare("Pranav", pass).then(result => {
      res.send(result ? "success" : "failed")
    })
  } else {
    res.send("failed")
  }
  // next()
})

module.exports = router
