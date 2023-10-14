// backend/routes/users.ts
import express from 'express';
import prisma from '../prisma/prisma.ts';
import cors from "cors"
const router = express.Router();
const app =express()
const corsOptions = {
  origin: 'https://skillhub-584r.onrender.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

router.get('/users', async (req, res) => {
  const users = await prisma.profiles.findMany()
  res.json(users);
});

export default router;
