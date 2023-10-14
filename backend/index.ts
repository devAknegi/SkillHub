import express from 'express';
import users from './routes/users.ts';
import user from './routes/getsignleuser.ts'
import friendrequest from "./routes/Friendreq.ts"
import check from "./routes/checkreq.ts"
import pending from "./routes/fetchpendingreq.ts"
import acceptrequest from "./routes/acceptrequest.ts"
import removerequest from "./routes/removereq.ts"
import accepted from "./routes/fetchacceptedreq.ts"
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 5171;

const corsOptions = {
  origin: 'https://skillhub-584r.onrender.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json())

app.use('/api', users);

app.use("/api",user)

app.use("/api",friendrequest)

app.use("/api",removerequest)

app.use("/api",acceptrequest)

app.use("/api",check)

app.use("/api",pending)

app.use("/api",accepted)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










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