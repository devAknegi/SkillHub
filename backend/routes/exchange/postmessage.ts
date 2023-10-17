import express from "express"
import prisma from "../../prisma/prisma.ts";
import { randomUUID } from "crypto";


const router = express.Router()

router.post("/storeexchange",async (req,res)=>{
    const {sender_id,receiver_id,desired_skills,message,receivername,sendername} = req.body;
    
    const data = await prisma.skill_exchanges.create({
        data:{
            id:randomUUID(),
            sender_id,
            receiver_id,
            desired_skills,
            offermessage:message,
            receivername,
            sendername,
        }
    })

    if(data){
        res.json({msg:"sucess"})
    }
    

})

export default router