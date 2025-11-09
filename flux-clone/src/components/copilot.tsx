const timeline = [
  {
    title: "Conversational ideation",
    description:
      "Speak the spec and Fluxflow suggests curated components, evaluates tradeoffs, and drafts the first schematic pass instantly.",
  },
  {
    title: "AI assisted layout",
    description:
      "Realtime routing with constraint satisfaction, auto-diff pair tuning, and copper pours that respect your manufacturing stackup.",
  },
  {
    title: "Instant DFM feedback",
    description:
      "Fabrication partners receive delta reports on every commit — see cost, lead time, and risk shifts before you press order.",
  },
];

export function Copilot() {
  return (
    <section
      id="copilot"
      className="relative mx-auto mt-28 w-full max-w-6xl overflow-hidden rounded-[40px] border border-slate-800/70 bg-slate-900/50 px-8 py-20 text-left shadow-[0_20px_60px_rgba(2,6,23,0.6)]"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.45),_transparent_60%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-indigo-500/20 via-purple-500/10 to-transparent" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <span className="rounded-full border border-indigo-400/40 bg-indigo-500/20 px-4 py-2 text-xs tracking-[0.4em] text-indigo-100">
            Fluxflow Copilot
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            Collaborate with an AI teammate built for hardware workflows
          </h2>
          <p className="max-w-xl text-base text-slate-200">
            Copilot sits beside every designer. It catches blockers before they ship, generates alternate routing strategies, and runs your electrical rules so you never lose momentum.
          </p>

          <div className="grid gap-6">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-indigo-500/10 transition duration-500 hover:border-indigo-400/40"
              >
                <span className="absolute inset-y-0 left-0 w-1 translate-y-0 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-sm font-bold text-indigo-200">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 shadow-2xl">
          <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
            <span className="uppercase tracking-[0.4em] text-slate-400">Prompt</span>
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-[10px] font-semibold uppercase text-indigo-100">
              realtime
            </span>
          </div>
          <div className="mt-16 space-y-6 px-6 pb-8 pt-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner">
              <p className="font-semibold text-slate-100">
                &ldquo;Draft a four-layer board for a low-power wearable sensor. Prioritize BLE, battery charging, and include an IMU.&rdquo;
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5 text-indigo-100">
                <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">Copilot</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Generated schematic with Nordic nRF54L, BQ25180 charger, and Bosch BMI270. Proposed 4-layer stackup with 0.8mm thickness. Highlighted power integrity concerns around RF matching.
                </p>
              </div>
              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5 text-purple-100">
                <p className="text-xs uppercase tracking-[0.4em] text-purple-200">Next</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Run signal integrity analysis on BLE traces, then sync sourcing to Flex PCB vendor. Copilot monitors BOM availability and suggests alternates if lead time spikes.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-xs text-slate-400">
              <p>Live integrations with Altium 365, JLCPCB, MacroFab, and Octopart keep your data synchronized.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
