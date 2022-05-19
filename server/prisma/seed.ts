const db = require('../db');

module.exports = async function seed() {
  await db.User.createMany({
    data: [
      {
        name: 'Brandon',
        email: 'brandon.monge@outlook.com',
        hashedPassword: 'pas_de_shaft_svp',
        role: 'admin',
      },
      {
        name: 'Jonathan',
        email: 'joGaborit@gmail.com',
        hashedPassword: 'migatte_first_step',
        role: 'project_manager',
      },
    ],
  });
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
