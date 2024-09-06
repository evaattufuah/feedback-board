"use client";
import { useState } from "react";
import Navbar from "@/components/navabr";
import Suggestions from "@/components/suggestions";

export default function Home() {
  const [category, setCategory] = useState("");

  return (
    <main className="sm:flex">
      <Navbar setCategory={setCategory} />
      <Suggestions category={category} setCategory={setCategory} />
    </main>
  );
}
