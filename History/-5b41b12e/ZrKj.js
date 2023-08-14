const express = require("express");
const router = express.Router()
const {noteMaking , getNotes , deleteNote} = require("../controllers/notesController")

router.post("/" , noteMaking)
router.get("/" , getNotes)
router.delete("/" , deleteNote)
router.patch("/" , patch)
// router.post("/" , (req, res) =>{
//     res.json({"message" : "sahith in this"})
// })


module.exports = router