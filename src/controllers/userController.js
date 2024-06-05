const prisma = require("../utils/prismaUtil")
const bcrypt = require("bcrypt")

exports.createUser = async(req,res,next)=>{
    try{
        const data = req.body
        data.password =  bcrypt.hash(data.password);
        const user = await prisma.user.create({
            data
        })
        delete client.password;
        res.status(200).json({message: "user created successfully"})
    }catch(error){
        console.log(error)
    }
}



module.exports = {
    createUser
}