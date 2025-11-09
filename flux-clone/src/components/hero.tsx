import Image from "next/image";

const stats = [
  { label: "Designers onboard", value: "68k" },
  { label: "Boards launched", value: "124k" },
  { label: "Figma sync", value: "live" },
  { label: "Latency", value: "42ms" },
];

export function Hero() {
  return (
    <section className="relative mx-auto mt-36 flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-[40px] border border-slate-800/60 bg-slate-900/40 p-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.55)] backdrop-blur-3xl sm:mt-40 sm:p-16">
      <div className="absolute inset-0 -z-10 grid-overlay opacity-60"></div>
      <div className="absolute inset-x-0 top-0 -z-20 h-full origin-top skew-y-[10deg] bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent blur-3xl" />

      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-200/80">
        The AI Hardware Design Platform
      </span>

      <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
        Design circuits at the speed of thought with <span className="text-gradient">Fluxflow Copilot</span>
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
        Bring together schematic capture, PCB layout, and AI-assisted automation. Fluxflow streamlines every decision with generative suggestions, realtime collaboration, and instant manufacturing feedback.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50 sm:w-auto">
          Launch the demo
        </button>
        <button className="w-full rounded-full border border-slate-700 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-slate-500 hover:text-white sm:w-auto">
          Watch overview
        </button>
      </div>

      <div className="mt-14 grid w-full grid-cols-2 gap-4 text-left text-sm text-slate-300 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-5">
            <div className="text-2xl font-semibold text-white">{stat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-16 w-full overflow-hidden rounded-[32px] border border-slate-800/60 bg-slate-900/80 p-4 shadow-inner">
        <div className="absolute inset-x-16 -top-24 h-48 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="flex flex-col gap-6 rounded-[24px] border border-white/10 bg-slate-950/80 p-6 text-left md:flex-row">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-white">Generative schematic drafts</h2>
            <p className="mt-3 text-sm text-slate-300">
              Describe your hardware in natural language and watch Fluxflow stitch together the first pass. Edit in realtime, version safely, and sync with manufacturing-ready constraints.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-indigo-400/40 px-3 py-1 text-indigo-200">
                GPT-4o powered
              </span>
              <span className="rounded-full border border-purple-400/40 px-3 py-1 text-purple-200">
                ERC compliance
              </span>
              <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-cyan-200">
                Manufacturing DFM
              </span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-2xl bg-slate-900/80 p-6 ring-1 ring-inset ring-white/10">
            <Image
              src="/flux-preview.svg"
              alt="Fluxflow interface preview"
              width={720}
              height={440}
              className="w-full rounded-xl border border-white/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
