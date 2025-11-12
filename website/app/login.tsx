"use client";
import React from "react";

export function LoginCard() {
  return (
<aside className="w-[600px] h-[900px] rounded-3xl bg-[#0a0909] bg-opacity-90 p-12 shadow-2xl border border-black/40 hover:border-red-500 transition-all duration-300">      <div className="flex items-center gap-6 pb-6">
        <div className="rounded-2xl bg-linear-to-br from-red-900 via-red-700 to-red-500 p-[3px]">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-black text-2xl font-bold text-red-500">
            N
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">Welcome back</h3>
          <p className="mt-1 text-sm text-white/60">Sign in to continue to Nethr</p>
        </div>
      </div>

      <form className="flex w-full flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-2xl bg-black/20 px-5 py-4 text-sm text-white placeholder-white/50 ring-0 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full rounded-2xl bg-black/20 px-5 py-4 text-sm text-white placeholder-white/50 ring-0 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />

        <div className="flex items-center justify-between text-sm text-white/60">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded-sm bg-black/20 ring-0 focus:ring-0" />
            Remember me
          </label>
          <a href="#" className="hover:text-red-500 transition">Forgot?</a>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-2xl bg-linear-to-r from-red-700 to-red-500 px-5 py-4 text-sm font-semibold text-black shadow-lg hover:shadow-red-500/50 transition"
        >
          Sign in
        </button>
      </form>
    </aside>
  );
}
