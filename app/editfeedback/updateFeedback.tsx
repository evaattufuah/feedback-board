"use server";

import prisma from "@/lib/prisma";

export const updateFeedback = async (
  title: string,
  category: string,
  description: string,
  feedbackId: any
) => {
  const feedback = await prisma.feedback.update({
    where: {
      id: parseInt(feedbackId),
    },
    data: {
      title,
      category,
      description,
    },
  });

  console.log("result", feedback);

  return feedback;
};
