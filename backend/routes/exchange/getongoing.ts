import express from "express"
import prisma from "../../prisma/prisma.ts";
import { json } from "stream/consumers";

const router = express.Router()

router.get("/getongoingexchanges/:id",async (req,res)=>{
    const {id} = req.params;
    const response = await prisma.skill_exchanges.findMany({
        where:{
            "sender_id":id,
            "accepted":true,
        }
    })
    
    if(response)
    res.json({
        response:response
    })
    else
    res.json({
        error:"something went wrong"
    })
    



    
})

export default router