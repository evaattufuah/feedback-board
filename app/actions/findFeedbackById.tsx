"use server";

import prisma from "@/lib/prisma";

export const findFeedbackById = async (feedbackId: any) => {
  const feedback = await prisma.feedback.findUnique({
    where: {
      id: parseInt(feedbackId),
    },
  });

  console.log("result", feedback);

  return feedback;
};
