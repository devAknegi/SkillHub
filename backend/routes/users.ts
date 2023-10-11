// backend/routes/users.ts
import express from 'express';
import prisma from '../prisma/prisma.ts';

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await prisma.profiles.findMany();
  res.json(users);
});

export default router;
