// bring in prisma and cookie

const prisma = require("../prisma/index")
const cookieToken = require("../utils/cookieToken")

//user signup
exports.signp = async (req , res) =>{
    try {
        
        const {name , email , password} = req.body
        if (!name || !email || !password){
            throw new Error("please give submit all the details")
        }

        
        
    } catch (error) {
        throw new Error(error)
        
    }


}