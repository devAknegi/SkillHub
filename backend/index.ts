// backend/server.ts
import express from 'express';
import users from './routes/users.ts';
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 5171;

app.use(cors());

app.use('/api', users);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









/////template function to use prisma
// async function main() {

//     await prisma.user_dashboard.create({
//         data:{
//             name:"ankit",
//             email:"recruitankitnegi2023@gmail.com",
//             bio:"I can do anything , just need a little time to learn if its not in my expertise",
//             phone:"9548623471",
//             skills:["anything","anytime","anywhere"]
//         }
//     })
//     // const allUsers = await prisma.user_dashboard.findMany()
//     // console.log(allUsers)
//     // console.log(app)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()  
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//   })