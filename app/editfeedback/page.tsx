"use client";

import { Suspense } from "react";
import Editfeedback from "./_components/EditFeedbackPage";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Editfeedback />
    </Suspense>
  );
};

export default page;
