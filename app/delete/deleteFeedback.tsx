"use server";

import prisma from "@/lib/prisma";

export const deleteFeedback = async (feedbackId: any) => {
  const feedback = await prisma.feedback.delete({
    where: {
      id: parseInt(feedbackId),
    },
  });

  console.log("delete", feedback);

  return feedback;
};
