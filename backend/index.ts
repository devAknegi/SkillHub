import express from 'express';
import users from './routes/users.ts';
import user from './routes/getsignleuser.ts'
import friendrequest from "./routes/Friendreq.ts"
import check from "./routes/checkreq.ts"
import pending from "./routes/fetchpendingreq.ts"
import acceptrequest from "./routes/acceptrequest.ts"
import removerequest from "./routes/removereq.ts"
import accepted from "./routes/fetchacceptedreq.ts"
import pendingreq from "./routes/exchange/pendingexcreq.ts"
import pendingrecivedreq from "./routes/exchange/pendingrecivedreq.ts"
import postexchangemessage from "./routes/exchange/postmessage.ts"
import getmessages from "./routes/getmessages.ts"
import acceptreq from "./routes/exchange/acceptthereq.ts"
import ongoingexc from "./routes/exchange/getongoing.ts"
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
    origin: "*",
    methods: ["GET", "POST"],
  }
})


app.use(cors());
app.use(express.json())


app.use('/api', users)

app.use("/api", user)

app.use("/api", friendrequest)

app.use("/api", removerequest)

app.use("/api", acceptrequest)

app.use("/api", check)

app.use("/api", pending)

app.use("/api", accepted)

app.use("/api", getmessages)

//exchange routes

app.use("/api", postexchangemessage)

app.use("/api", pendingreq)


app.use("/api", pendingrecivedreq)


app.use("/api", acceptreq)

app.use("/api",ongoingexc);




//server for realtime chat

io.on("connection", (socket) => {

  socket.on("join", (userid: string) => {
    socket.join(userid.toString())
    console.log("user connected")
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
    console.log("user disconnected")
  })

});


server.listen(PORT, () => {
  console.log(`server fired on port ${PORT}`);
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