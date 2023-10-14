import prisma from "../prisma/prisma.ts";
import express from "express";
import cors from "cors"
const app = express()

app.use(express.json())
const corsOptions = {
    origin: 'https://skillhub-584r.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));

const router = express.Router();

router.get("/user/:id", async (req,res)=>{

    const {id} = (req.params);
    const filter = id.toString()
    const data = await prisma.profiles.findFirst({
        where:{
            id:filter
        }
    })
    
    res.json(data);
})

export default router