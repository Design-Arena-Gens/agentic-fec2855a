const highlights = [
  {
    quote:
      "Fluxflow is the first tool where mechanical, electrical, and firmware engineers iterate in one space without translation friction.",
    name: "Leah Kim",
    role: "Head of Hardware, Synapse Robotics",
  },
  {
    quote:
      "Our manufacturing lead times dropped 32% after connecting Fluxflow's DFM pipeline to our contract manufacturer.",
    name: "Mateo Alvarez",
    role: "Operations Lead, Pulse Medical",
  },
  {
    quote:
      "Component suggestions respect our compliance constraints automatically — huge unlock for medical certifications.",
    name: "Priya Narayanan",
    role: "Principal EE, Nova Health",
  },
];

const updates = [
  {
    title: "May 2025",
    description:
      "Realtime power integrity simulation now supported directly in layout with suggested fixes inline.",
  },
  {
    title: "April 2025",
    description:
      "Fluxflow Copilot connects to the new component parametric search with constraint filters.",
  },
  {
    title: "March 2025",
    description:
      "Team workspaces gain review checklists, approvals, and compliance packs for ISO 13485.",
  },
];

export function Community() {
  return (
    <section id="community" className="mx-auto mt-32 w-full max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-slate-800/70 bg-slate-950/60 p-10 shadow-xl shadow-slate-950/40">
          <div className="flex items-center justify-between">
            <div>
              <span className="rounded-full border border-slate-700/80 bg-slate-800/80 px-4 py-2 text-xs tracking-[0.4em] text-slate-300">
                Customer Stories
              </span>
              <h2 className="mt-6 max-w-xl text-balance text-3xl font-semibold text-white sm:text-4xl">
                Designed with the fastest growing hardware teams
              </h2>
            </div>
            <div className="hidden h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 text-2xl font-bold text-white lg:flex">
              32k+
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-sm text-slate-200 shadow-inner"
              >
                <p className="text-pretty">“{item.quote}”</p>
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {item.name}
                </div>
                <div className="mt-1 text-xs text-slate-500">{item.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="updates"
          className="rounded-[32px] border border-slate-800/70 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90 p-10 shadow-xl shadow-slate-950/40"
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.4em] text-slate-300">
            Release Notes
          </span>
          <h3 className="mt-6 text-2xl font-semibold text-white">
            Always shipping — track what’s new in Fluxflow
          </h3>
          <div className="mt-8 space-y-6">
            {updates.map((update) => (
              <div key={update.title} className="border-l border-indigo-500/40 pl-6">
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                  {update.title}
                </div>
                <p className="mt-2 text-sm text-slate-300">{update.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-6 text-sm text-indigo-100">
            Subscribe for monthly updates, playbooks, and office hours with the Fluxflow team.
          </div>
        </div>
      </div>
    </section>
  );
}
