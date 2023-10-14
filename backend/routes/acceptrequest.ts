import express from "express"

import prisma from "../prisma/prisma.ts"
import cors from "cors"
import { randomUUID } from "crypto"



const app = express()
const corsOptions = {
    origin: 'https://skillhub-584r.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
const router = express.Router()

router.post("/acceptrequest", async (req, res) => {
    const reqsender = req.body?.reqsender;
    const reqreciver = req.body?.reqreciver;
    if (!reqsender || !reqreciver) {
        return res.status(400).json({ error: 'reqsender and reqreciver are required parameters.' });
    }

    try {

        const data = await prisma.$queryRaw`UPDATE friends
        SET accepted = true
        WHERE (uid1 = ${reqsender}::uuid AND uid2 = ${reqreciver}::uuid)`

        if(data)
        res.json({message:"added"})
        else
        res.json({message:"error occured"})
    }
    catch (error) {
        res.status(500).json({
            error: 'Internal Server Error',
            message: 'Failed to send request',
        });
    }


}
)

export default router