import express from 'express';
import users from './routes/users.ts';
import user from './routes/getsignleuser.ts'
import friendrequest from "./routes/Friendreq.ts"
import check from "./routes/checkreq.ts"
import pending from "./routes/fetchpendingreq.ts"
import acceptrequest from "./routes/acceptrequest.ts"
import removerequest from "./routes/removereq.ts"
import accepted from "./routes/fetchacceptedreq.ts"

import getmessages from "./routes/getmessages.ts"
import cors from "cors"
import http from 'http';
import { Server } from 'socket.io';
import prisma from './prisma/prisma.ts';
import { randomUUID } from 'crypto';


const app = express();
const PORT = process.env.PORT || 5171;


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
})


app.use(cors());
app.use(express.json())

app.use('/api', users);

app.use("/api", user)

app.use("/api", friendrequest)

app.use("/api", removerequest)

app.use("/api", acceptrequest)

app.use("/api", check)

app.use("/api", pending)

app.use("/api", accepted)

app.use("/api", getmessages)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//server for realtime chat

io.on("connection", (socket) => {

  socket.on("join", (userid: string) => {
    socket.join(userid.toString())
  });

  socket.on("chat message", async ({ senderId, receiverId, message }) => {
    try {
      const savedMessage = await prisma.messages.create({
        data: {
          id: randomUUID(),
          receiver_id: receiverId,
          sender_id: senderId,
          message,
        },
      });

      io.to(receiverId ? receiverId.toString() : "").emit("chat message", savedMessage);


    }
    catch (error) {
      console.error(error)
    }
  })

  socket.on("disconnect", () => {
    // console.log("user disconnected")
  })

});


server.listen(3001, () => {
  console.log(`server fired on port 3001`);
})




























































// ///template function to use prisma
// import prisma from "./prisma/prisma.ts"
// async function main() {
//   const allUsers = await prisma.profiles.findMany();
//   console.log(allUsers)

// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//   })