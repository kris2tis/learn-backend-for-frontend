import { prisma } from "../../../../lib/prisma";
export async function POST() {
  const user = await prisma.user.create({
    data: {
      name: "مهدی",
      email: "m.rezaei.coder@gmail.com",
      posts: {
        create: {
          title: "سلام",
          content: "این اولین پست بنده و اولین رابطم با بک اند هستش",
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  });

  return Response.json({ message: "شما یک کاربر ساختید" });
}
