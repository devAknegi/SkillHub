import express from 'express';
import users from './routes/users.ts';
import user from './routes/getsignleuser.ts'
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 5171;

app.use(cors());

app.use('/api', users);

app.use("/api",user)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










// ///template function to use prisma
// import prisma from "./prisma/prisma.ts"
// async function main() {
//   const allUsers = await prisma.profiles.findMany({
//     where: {
//       Experties:{
//         equals:null
//       }
//     },
//   });
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