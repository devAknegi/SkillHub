import express from "express"
import prisma from "../../prisma/prisma.ts";
import { randomUUID } from "crypto";


const router = express.Router()

router.get("/getexcreceivedreq/:id",async (req,res)=>{
    const {id} = req.params;
    const data = await prisma.skill_exchanges.findMany({
        where: {
          receiver_id:id
        },
      });
    if(data)
    {
        res.json(data)

    }
    else{
        res.sendStatus(404);
    }


})

export default router