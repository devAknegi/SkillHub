import express from "express"
import prisma from "../../prisma/prisma.ts";
import { randomUUID } from "crypto";


const router = express.Router()

router.post("/acceptreq",async (req,res)=>{
    const {sender_id,receiver_id} = req.body;
    
    const data = await prisma.skill_exchanges.updateMany({
        where:{
            receiver_id:receiver_id,
            sender_id:sender_id ,
        },
        data:{
            accepted:true
        },
        
    })
    if(data){
        res.json({msg:"sucess , now you can find the person in ongoing exchnages section"})
    }
    

})

export default router






