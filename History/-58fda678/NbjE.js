const express = require("express")
const router = express.Router()
const Subscriber = require("../models/subscriber")


//Getting all
router.get("/", async (req, res) =>{

    try {
       const subscribers = await Subscriber.find() 
       res.json(subscribers)
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }

})

// Getting one
router.get("/:id" , (req, res) =>{


})

// Updating One 
router.patch("/:id" , (req, res) =>{

})


// Deleting 

router.delete("/" , (req, res) =>{

})

module.exports = router 