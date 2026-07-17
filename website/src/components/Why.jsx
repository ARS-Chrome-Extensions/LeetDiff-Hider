import { Brain, Crosshair, ShieldCheck } from "lucide-react";

const REASONS = [
  {
    icon: Brain,
    title: "Psychological Bias",
    description:
      "Seeing 'Easy' primes you to expect a quick win, and 'Hard' primes you to expect to fail before you've read a single line. Both change how you think.",
  },
  {
    icon: Crosshair,
    title: "Focus on Solving",
    description:
      "Without a label anchoring your expectations, your attention goes straight to the problem itself, not to managing how it's supposed to feel.",
  },
  {
    icon: ShieldCheck,
    title: "Build Confidence",
    description:
      "Every problem becomes a fair fight. You learn to trust your own read on a problem instead of a tag someone else assigned to it.",
  },
];

function Why() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Why LeetDiff Hider?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Difficulty labels create subconscious bias. Remove the noise and
            focus on solving.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
