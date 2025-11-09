const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Solo designers exploring AI assisted workflows.",
    features: [
      "Unlimited personal boards",
      "AI Copilot prompts (300/month)",
      "Export to Gerber, BOM",
      "Community support",
    ],
  },
  {
    name: "Scale",
    price: "$59",
    description: "Growing teams shipping to production every month.",
    features: [
      "Team workspaces & roles",
      "Unlimited AI Copilot usage",
      "Manufacturing partner sync",
      "Versioned approvals & reviews",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    description: "Compliance ready deployments with custom integrations.",
    features: [
      "Dedicated success engineer",
      "Regulated workflows (ISO/IEC)",
      "On-prem or private cloud",
      "Custom model fine-tuning",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto mt-32 w-full max-w-6xl">
      <div className="text-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.4em] text-slate-300">
          Pricing
        </span>
        <h2 className="mt-6 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Plans that let every hardware team tap into AI superpowers
        </h2>
        <p className="mt-4 text-base text-slate-300">
          Fair pricing for indie designers all the way to enterprise organizations.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex h-full flex-col rounded-3xl border border-slate-800/70 bg-slate-950/70 p-8 text-left shadow-xl shadow-slate-950/40 backdrop-blur-2xl transition duration-500 ${
              tier.highlight ? "border-indigo-400/60 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-cyan-500/10" : ""
            }`}
          >
            {tier.highlight ? (
              <span className="absolute right-6 top-6 rounded-full border border-indigo-300/40 bg-indigo-500/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-indigo-100">
                Most popular
              </span>
            ) : null}
            <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
            <div className="mt-4 text-3xl font-bold text-white">{tier.price}</div>
            <p className="mt-3 text-sm text-slate-300">{tier.description}</p>
            <div className="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-200">
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/30 text-xs text-indigo-100">
                    ✓
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:text-white/90">
              {tier.highlight ? "Start free trial" : "Contact sales"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
