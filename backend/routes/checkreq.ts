// backend/routes/users.ts
import express from 'express';
import prisma from '../prisma/prisma.ts';

const router = express.Router();

router.get('/check', async (req, res) => {
    
    const reqsender = req.query.reqsender;
    const reqreciver = req.query?.reqreciver;
    if (!reqsender || !reqreciver) {
        return res.status(400).json({ error: 'reqsender and reqreciver are required parameters.' });
    }

    try {
        const result = await prisma.friends.findFirst({
            where: {
                uid1: reqsender as string,
                uid2: reqreciver as string,
            },
            select: {
                status: true,
            },
        });

        if (!result) {
            res.json({ message: 'Add Friend' });
        } else if (result.status === false) {
            res.json({ message: 'Pending' });
        } else {
            res.json({ message: 'Friends' });
        }
    } catch (error) {
        console.error('Error fetching friend request status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {

        await prisma.$disconnect();
    }
});

export default router;