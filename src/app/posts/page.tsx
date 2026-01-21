"use client";

import { Navbar } from "@/src/components/Navbar";
import PostSection from "@/src/components/PostSection";
import { Suspense } from "react";

export default function PostsPage() {
  return (
    <main className="p-8 w-4/5 max-w-7xl mx-auto flex flex-col items-center">
      <Suspense fallback={<div>Cargando buscador...</div>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div>Cargando posts...</div>}>
        <PostSection />
      </Suspense>
    </main>
  );
}
