const db = require('../db');
// import { v4 as uuidv4 } from 'uuid';

module.exports = async function seed() {
  await db.User.createMany({
    data: [
      {
        name: 'Brandon',
        email: 'brandon.monge@outlook.com',
        hashedPassword: 'MontBrand',
        role: 'super_admin',
      },
      {
        name: 'Jonathan',
        email: 'joGaborit@gmail.com',
        hashedPassword: 'migFirstStep',
        role: 'super_admin',
      },
      {
        name: 'Rachid',
        email: 'bgdu69@hotmail.fr',
        hashedPassword: '69latrick',
        role: 'admin',
      },
      {
        name: 'Baptiste',
        email: 'bapt@gmail.com',
        hashedPassword: 'dotnet6',
        role: 'admin',
      },
      {
        name: 'Cyril',
        email: 'cyrheel@gmail.com',
        hashedPassword: 'PetitJean38',
        role: 'admin',
      },
      {
        name: 'Norhen',
        email: 'nono@gmail.com',
        hashedPassword: 'MVP',
        role: 'admin',
      },
    ],
  });
  await db.Project.createMany({
    data: [
      {
        title: 'Mont Blanc Project',
        description: 'Mont Blanc DB Test',
        start_time: '2022-05-15T00:00:00.000Z',
        end_time: '2022-05-25T00:00:00.000Z',
        status: 'Active',
      },
    ],
  });
  await db.Ticket.createMany({
    data: [
      {
        title: 'Ticket Test',
        description: 'A ticket used for a test.',
        estimated_time: 5,
        spent_time: 3,
        status: 'Active',
        labels: 'Front-End',
        priority: '1',
        difficulty: 'High',
        projectId: 1,
      },
    ],
  });
};

module
  .exports()
  .catch((e: React.SyntheticEvent<EventTarget>) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

//! npx prisma migrate dev
//! npx prisma db seed
//! npx prisma migrate reset

export {};
