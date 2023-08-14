const express = require("express");
const { signUpPostController, signUpGetController, signUpPatchController } = require("../controllers/signUp.controller")
const router = express.Router()

router.get("/", signUpGetController)
router.post("/", signUpPostController)
router.patch("/", signUpPatchController)
router.delete("/" , signde)


module.exports = router