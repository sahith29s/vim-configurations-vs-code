const express = require("express");
const { signUpPostController, signUpGetController } = require("../controllers/signUp.controller")
const router = express.Router()

router.get("/", signUpGetController)
router.post("/", signUpPostController)
router.patch("/", sig)


module.exports = router