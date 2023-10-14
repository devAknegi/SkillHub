// backend/routes/users.ts
import express from 'express';
import prisma from '../prisma/prisma.ts';
import cors from "cors"
const router = express.Router();
const app =express()


app.use(cors());

router.get('/users', async (req, res) => {
  const users = await prisma.profiles.findMany()
  res.json(users);
});

export default router;
