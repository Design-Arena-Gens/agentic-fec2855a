import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  badge?: string;
}

const features: Feature[] = [
  {
    title: "Generative schematic capture",
    description:
      "Prompt the topology you need and Fluxflow proposes routed drafts, constraint checks, and alternate architectures in seconds.",
    href: "#",
    badge: "New",
    icon: (
      <svg
        className="h-10 w-10 text-indigo-300"
        fill="none"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="12" width="38" height="24" rx="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M21 18H13C11.3431 18 10 19.3431 10 21C10 22.6569 11.3431 24 13 24H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M27 30H35C36.6569 30 38 28.6569 38 27C38 25.3431 36.6569 24 35 24H27"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Constraint aware routing",
    description:
      "Dynamic copper pours, impedance tuning, and manufacturability checks render instantly inside your layout.",
    href: "#",
    icon: (
      <svg
        className="h-10 w-10 text-cyan-300"
        fill="none"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 14L24 8L36 14V34L24 40L12 34V14Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 16V32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 20V26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 20V26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Realtime manufacturing feedback",
    description:
      "Send revisions to fabricators with DFM diffs automatically generated. Get pricing deltas before you finalize anything.",
    href: "#",
    icon: (
      <svg
        className="h-10 w-10 text-purple-300"
        fill="none"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="10" width="32" height="24" rx="6" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="18" width="20" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 32C20 33.1046 19.1046 34 18 34C16.8954 34 16 33.1046 16 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 32C32 33.1046 31.1046 34 30 34C28.8954 34 28 33.1046 28 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Versioned design reviews",
    description:
      "Branch, diff, and merge your hardware designs with the same rigor you expect from modern software workflows.",
    href: "#",
    icon: (
      <svg
        className="h-10 w-10 text-emerald-300"
        fill="none"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 12V30C16 33.3137 18.6863 36 22 36C25.3137 36 28 33.3137 28 30V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M32 18L36 22L32 26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function FeatureGrid() {
  return (
    <section id="product" className="mx-auto mt-28 w-full max-w-6xl">
      <div className="mb-12 flex flex-col items-start gap-4 text-left">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.4em] text-slate-300">
          Product
        </span>
        <h2 className="max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          Everything you need to go from idea to manufactured hardware in one place
        </h2>
        <p className="max-w-3xl text-base text-slate-300">
          Fluxflow unifies schematic capture, PCB layout, sourcing, and manufacturing into a single AI-native canvas. Your team stays aligned, while the copilot keeps every decision inside constraints.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <a
            key={feature.title}
            href={feature.href}
            className="group relative h-full rounded-3xl border border-slate-800/70 bg-slate-900/40 p-8 text-left shadow-lg shadow-slate-950/30 backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 hover:border-slate-700/80"
          >
            <div className="absolute inset-0 z-[-1] opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/10" />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
              {feature.badge ? (
                <span className="rounded-full border border-indigo-400/40 bg-indigo-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-100">
                  {feature.badge}
                </span>
              ) : null}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-indigo-200">
              Explore more
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
