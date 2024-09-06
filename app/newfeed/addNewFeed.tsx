"use server";

import prisma from "@/lib/prisma";

export const addNewFeedback = async (
  title: string,
  category: string,
  description: string
) => {
  "use server";

  const feedback = await prisma.feedback.create({
    data: {
      title,
      category,
      description,
    },
  });

  console.log("hello", feedback);

  return feedback;
};
