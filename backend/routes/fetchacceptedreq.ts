import express from "express"
import prisma from "../prisma/prisma.ts"
import cors from "cors"

const app = express()
const corsOptions = {
    origin: 'https://skillhub-584r.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
const router = express.Router()

router.get("/getacceptedreq/:id", async (req, res) => {
    const {id} = req.params    
    if (!id) {
        return res.status(400).json({ error: 'id is a  required parameter.' });
    }

    try {
        const profiles = await prisma.$queryRaw`SELECT * FROM profiles WHERE id IN (SELECT uid1::uuid FROM friends WHERE uid2 = ${id}::uuid AND accepted = true) `;      
        res.json({ profiles:profiles });
    } catch (error) {
      console.error('Error fetching profiles:', error);
      res.status(500).json({ error:error });
    }
    
})

export default router