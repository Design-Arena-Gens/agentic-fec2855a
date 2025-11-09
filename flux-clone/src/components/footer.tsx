import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Copilot", "Integrations", "Roadmap"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Help center", "Community", "Security", "Status"],
  Legal: ["Privacy", "Terms", "Licensing", "Cookies"],
};

export function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-800/70 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm space-y-4">
            <Link href="#" className="flex items-center gap-2 text-base font-semibold">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-base font-bold text-white shadow-lg">
                Φ
              </span>
              Fluxflow
            </Link>
            <p className="text-sm text-slate-400">
              Designing the future of hardware with an AI-first workflow that keeps your team on the same page.
            </p>
          </div>
          <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="space-y-3 text-sm text-slate-300">
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {section}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-slate-400 transition hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 border-t border-slate-800/70 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Fluxflow Technologies Inc.</p>
          <div className="flex gap-4">
            <Link href="#" className="transition hover:text-white">
              Status
            </Link>
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
