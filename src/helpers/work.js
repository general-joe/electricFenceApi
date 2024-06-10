const prisma = require("../utils/prismaUtil")

const saveWork = async(data) =>{
    const work = await prisma.create({
        data,
    })
    return work
}