import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
    select: {
      id: true,
      password: true,
      firstName: true,
    },
  });
  console.log(res);
}

// insertUser("rushil1@gmail.com", "password1", "Rushil1", "Patel1");
// insertUser("rushil@gmail.com", "password", "Rushil", "Patel");

///////////////////////////////////////////////////////////////////////////////////////////////////

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(id: number, { firstName, lastName }: UpdateParams) {
  const res = await prisma.user.update({
    where: { id: id },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

// updateUser(1, {
//   firstName: "updatedrushil",
//   lastName: "updatedpatel",
// });

// updateUser(2, {
//   firstName: "world",
//   lastName: "HELLOOOOOO",
// });

////// udate using unique fields - email is unique here

async function updateUserByEmail(email: string, { firstName, lastName }: UpdateParams) {
  const res = await prisma.user.update({
    where: { email: email },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

// updateUserByEmail("rushil@gmail.com", {
//   firstName: "gojo",
//   lastName: "satoru",
// });

//////////////////////////////////////////////////////////////////////////////////

async function findById(id: number) {
  const res = await prisma.user.findUnique({
    where: { id: 1 },
  });
  console.log(res);
}

findById(1);
