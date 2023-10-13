import express from "express"
import prisma from "../prisma/prisma.ts"
import cors from "cors"
import { randomUUID } from "crypto"

const app = express()
app.use(cors)
const router = express.Router()

router.get("/getpendingreq/:id", async (req, res) => {
    const {id} = req.params    
    if (!id) {
        return res.status(400).json({ error: 'id is a  required parameter.' });
    }

    try {
        const profiles = await prisma.$queryRaw`SELECT * FROM profiles WHERE id IN (SELECT uid1::uuid FROM friends WHERE uid2 = ${id}::uuid AND accepted = false) `;      
        res.json({ profiles:profiles });
    } catch (error) {
      console.error('Error fetching profiles:', error);
      res.status(500).json({ error:error });
    }
    
})

export default router