export function CTA() {
  return (
    <section className="mx-auto mt-28 w-full max-w-5xl overflow-hidden rounded-[36px] border border-indigo-400/30 bg-gradient-to-r from-indigo-500/30 via-purple-500/25 to-cyan-500/25 p-[1px] shadow-[0_30px_70px_rgba(46,16,101,0.35)]">
      <div className="rounded-[34px] bg-slate-950/90 px-10 py-14 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-indigo-200">
          Start today
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Launch your next hardware product with AI copilots and realtime manufacturing feedback.
        </h2>
        <p className="mt-4 text-sm text-indigo-100/80">
          Join thousands of engineers building the future in Fluxflow. No credit card required.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto">
            Create free account
          </button>
          <button className="w-full rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/50 sm:w-auto">
            Meet with product
          </button>
        </div>
      </div>
    </section>
  );
}
