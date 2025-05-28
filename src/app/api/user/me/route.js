import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new Response(null, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user || !user.name) {
    return new Response(null, { status: 404 });
  }
  return Response.json({ user });
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new Response(null, { status: 401 });
  }
  const data = await req.json();
  let user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  // Falls User existiert, aber noch keinen Namen hat → Name setzen
  if (user && !user.name) {
    user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.name,
        image: data.image || session.user.image,
      },
    });
  }
  // Falls User noch nicht existiert → anlegen
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: session.user.email,
        name: data.name,
        image: data.image || session.user.image,
      },
    });
  }
  return Response.json({ user });
}
