import {
  EyeOff,
  ToggleLeft,
  Zap,
  ShieldCheck,
  Code2,
  Feather,
} from "lucide-react";

const FEATURES = [
  {
    icon: EyeOff,
    title: "Hide Difficulty",
    description: "Difficulty tags disappear from problem lists, headers, and search results across the site.",
  },
  {
    icon: ToggleLeft,
    title: "One Click Toggle",
    description: "Switch labels on or off from the extension popup whenever you want a peek.",
  },
  {
    icon: Zap,
    title: "Works Instantly",
    description: "No reload, no setup. Labels vanish the moment the page loads.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description: "No accounts, no tracking, no network requests. Everything happens in your browser.",
  },
  {
    icon: Code2,
    title: "Open Source",
    description: "The full source is public. Read it, fork it, or audit exactly what it does.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description: "A small Manifest V3 script with no dependencies and no impact on page speed.",
  },
];

function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything it does. Nothing it doesn't.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A single, focused feature set, built to disappear into your
            workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5.5 w-5.5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
