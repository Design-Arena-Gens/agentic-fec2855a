const steps = [
  {
    title: "Ideate",
    subtitle: "Describe what you need",
    description:
      "Copilot translates natural language specs into component selections, annotated schematics, and project scaffolds.",
  },
  {
    title: "Collaborate",
    subtitle: "Invite your team",
    description:
      "Review changes with rich diffs, leave contextual comments, and co-edit boards together from anywhere.",
  },
  {
    title: "Validate",
    subtitle: "Simulate and verify",
    description:
      "Run ERC, SI, PI, and thermal simulations with a single click. Fluxflow queues them in the cloud and surfaces issues inline.",
  },
  {
    title: "Ship",
    subtitle: "Sync to manufacturing",
    description:
      "Push BOMs, Gerbers, and assembly data directly to preferred vendors. Receive DFM alerts before they become blockers.",
  },
];

export function Workflow() {
  return (
    <section className="mx-auto mt-28 w-full max-w-6xl rounded-[40px] border border-slate-800/70 bg-slate-950/80 p-10 shadow-[0_20px_60px_rgba(2,6,23,0.6)]">
      <div className="flex flex-col gap-6 text-left lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.4em] text-slate-300">
            Workflow
          </span>
          <h2 className="mt-6 max-w-xl text-balance text-3xl font-semibold text-white sm:text-4xl">
            From idea to production without context switching
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          Fluxflow automates the repetitive work so your team can explore more ideas. Every stage is powered by AI support that understands your constraints.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 transition duration-500 hover:border-indigo-400/40 hover:bg-slate-900/90"
          >
            <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
              <div className="h-full w-full bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-cyan-500/10" />
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-indigo-200">
              {step.title}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{step.subtitle}</h3>
            <p className="mt-3 text-sm text-slate-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
