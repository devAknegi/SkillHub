import express from "express"
import prisma from "../prisma/prisma.ts"
import cors from "cors"

const app = express()
app.use(cors)
const router = express.Router()

router.get("/getmessages/:id/:receiverId", async (req, res) => {
    const { id, receiverId } = req.params
    if (!id) {
        return res.status(400).json({ error: 'id is a  required parameter.' });
    }

    try {
        const messages = await prisma.$queryRaw`SELECT * FROM messages WHERE (sender_id=${id}::uuid AND receiver_id=${receiverId}::uuid) OR (sender_id=${receiverId}::uuid AND receiver_id=${id}::uuid)  `;
        res.json({ messages: messages });
    } catch (error) {
        console.error('Error fetching profiles:', error);
        res.status(500).json({ error: error });
    }

})

export default router