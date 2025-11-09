const companies = [
  "nvidia",
  "ida",
  "relay",
  "figma",
  "tempo",
  "arduino",
  "particle",
  "sparkfun",
];

export function Companies() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl">
      <div className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/40 px-8 py-10 text-center backdrop-blur-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Trusted by modern hardware teams
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-8 text-sm uppercase text-slate-500/80 sm:text-base lg:gap-12">
          {companies.map((company) => (
            <span key={company} className="tracking-[0.35em]">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
