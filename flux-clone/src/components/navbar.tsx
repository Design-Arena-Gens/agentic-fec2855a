"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "AI Copilot", href: "#copilot" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "#pricing" },
  { label: "Updates", href: "#updates" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-800/60 bg-slate-900/60 px-5 py-3 backdrop-blur-xl transition-colors duration-700 hover:border-slate-700/80 sm:px-8">
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-sm font-bold text-white shadow-lg">
            Φ
          </span>
          <span className="hidden sm:block">Fluxflow</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500">
            Sign in
          </button>
          <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50">
            Start designing
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="grid grid-cols-1 gap-1.5">
            <span className="block h-0.5 w-5 bg-slate-200"></span>
            <span className="block h-0.5 w-4 bg-slate-200" style={{ justifySelf: "end" }}></span>
            <span className="block h-0.5 w-6 bg-slate-200"></span>
          </div>
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 flex w-full max-w-6xl flex-col gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/90 p-6 text-sm text-slate-100 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <button className="w-full rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100">
              Sign in
            </button>
            <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30">
              Start designing
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
