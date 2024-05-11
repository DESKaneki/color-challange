"use client"

import { Landing } from "./pages/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-white flex-col items-center justify-between p-24">
      <Landing></Landing>
    </main>
  );
}
