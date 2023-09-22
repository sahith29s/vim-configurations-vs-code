const asyncHandler = require("express-async-handler")
const User = require("../model/UserModel")

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("chuitye sare fields enter kr na")
        // res.json("chutiye sare fields enter kr na")
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("Kitne barr register karega re chutiye")
        // res.json("Kitne barr register karega re chutiye");
    }

    const user = await User.create({ name, email, password, pic })


    if (user) {
        const { _id, name, email, pic } = user
        res.status(201)
        res.json({ _id, name, email, pic })
    }

    else {
        re
    }
})