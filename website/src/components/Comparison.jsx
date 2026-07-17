import { ArrowRight } from "lucide-react";

function Frame({ label, tone, image, alt }) {
  return (
    <figure className="flex-1">
      <div className="overflow-hidden rounded-3xl border border-border bg-card/60 shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          </div>
          <span
            className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide ${tone}`}
          >
            {label}
          </span>
        </div>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

function Comparison() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            One toggle is the entire interface. Difficulty labels disappear,
            everything else about the problem list stays exactly the same.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 lg:flex-row">
          <Frame
            label="Before"
            tone="text-rose-400 bg-rose-400/10"
            image="/before.png"
            alt="LeetCode problem list before LeetDiff Hider is enabled, showing Easy, Medium, and Hard difficulty labels"
          />

          <div className="flex shrink-0 items-center justify-center py-2 lg:py-0">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary lg:rotate-0">
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" aria-hidden="true" />
            </span>
          </div>

          <Frame
            label="After"
            tone="text-primary bg-primary/10"
            image="/after.png"
            alt="LeetCode problem list after LeetDiff Hider is enabled, showing difficulty labels hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Comparison;
