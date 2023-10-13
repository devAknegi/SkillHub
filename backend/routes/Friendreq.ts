import express from "express"

import prisma from "../prisma/prisma.ts"
import cors from "cors"
import { randomUUID } from "crypto"

const app = express()
app.use(cors)
const router = express.Router()

router.post("/friendrequest", async (req, res) => {
    const reqsender = req.body?.reqsender;
    const reqreciver = req.body?.reqreciver;
    if (!reqsender || !reqreciver) {
        return res.status(400).json({ error: 'reqsender and reqreciver are required parameters.' });
    }

    if(reqreciver===reqsender){
        return res.json({
            message:"trying to send req to yourself"
        })
    }
    const data = await prisma.friends.findFirst({
        where: {
            uid1: reqsender,//the person who is logged in 
            uid2: reqreciver,//to whom he is sending 
        }
    })

    if (data == null) {
        try {
            const newreq = await prisma.friends.create({
                data: {
                    id: randomUUID(),
                    uid1: reqsender,
                    uid2: reqreciver,
                    accepted: false
                }


            })
            res.json({
                message:"request sent sucessfully",
                user:newreq
            })
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error',
                message: 'Failed to send request',
              });
          
        }
        

    }
})

export default router