"use client";

import { Navbar } from "@/src/components/Navbar";
import PostSection from "@/src/components/PostSection";

export default function PostsPage() {
  return (
    <main className="p-8 w-4/5 max-w-7xl mx-auto flex flex-col items-center">
      <Navbar />
      <PostSection />
    </main>
  );
}
