import React from "react";
import { LoginCard } from "./login";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-linear-to-t from-black via-[#660000] to-[#9c0e0e] font-sans">
      
      <div className="flex flex-1 flex-col items-start px-16 mt-20">
        <h1 className="text-5xl font-arial-bold leading-snug text-white mb-4">
          Welcome to Nethr.io
        </h1>
      </div>

      <div className="flex flex-1 justify-end items-center px-16">
        <LoginCard />
      </div>
    </div>
  );
}
