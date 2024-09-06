"use server";
import prisma from "@/lib/prisma";

export const findFeedbacksByCategory = async (category?: string) => {
  const feedback = await prisma.feedback.findMany({
    where: {
      category: category,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("result", feedback);

  return feedback;
};

export const findFeedbacks = async () => {
  const feedback = await prisma.feedback.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("result", feedback);

  return feedback;
};
