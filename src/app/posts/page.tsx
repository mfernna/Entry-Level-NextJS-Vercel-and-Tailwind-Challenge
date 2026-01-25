"use client";

import { Navbar } from "@/src/components/Navbar";
import PostSection from "@/src/components/PostSection";
import { Suspense } from "react";

export default function PostsPage() {
  return (
    <main className="p-8 w-4/5 max-w-7xl mx-auto flex flex-col items-center">
      <Suspense fallback={<span>Cargando buscador...</span>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<span>Cargando posts...</span>}>
        <PostSection />
      </Suspense>
    </main>
  );
}
