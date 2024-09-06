"use server";
import prisma from "@/lib/prisma";

export const findFeedbacks = async (category?: string) => {
  const feedback = await prisma.feedback.findMany({
    where: {
      category: category ? category : {},
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("result", feedback);

  return feedback;
};
