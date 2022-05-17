const db = require('../db');

module.exports = async function seed() {
  await db.User.createMany({
    data: [
    { name: 'Brandon', email: 'test@gmail.com' , hashedPassword: 'test', role: 'admin' },      
    { name: 'Jonathan', email: 'joGaborit@gmail.com', hashedPassword: 'pipi', role: 'project_manager' },
  ],
  })
//   await db.foodType.createMany({
//     data: [
//    
//   ],
//   })
};

module
.exports()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await db.$disconnect();
});

// npx prisma migrate dev
// npx prisma db seed
// npx prisma migrate reset