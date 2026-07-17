import { useState } from "react";
import { ArrowRight, Download, Github, Lock, GitBranch, Feather, EyeOff, Eye } from "lucide-react";
import { DOWNLOAD_ZIP_URL, GITHUB_REPO_URL } from "../lib/links";

const PROBLEMS = [
  { id: "1", title: "Two Sum", difficulty: "Easy" },
  { id: "2", title: "Add Two Numbers", difficulty: "Medium" },
  { id: "3", title: "Median of Two Arrays", difficulty: "Hard" },
  { id: "4", title: "Longest Palindrome", difficulty: "Medium" },
  { id: "5", title: "Valid Parentheses", difficulty: "Easy" },
];

const DIFFICULTY_STYLES = {
  Easy: "text-primary bg-primary/10",
  Medium: "text-amber-400 bg-amber-400/10",
  Hard: "text-rose-400 bg-rose-400/10",
};

const STATS = [
  { icon: Lock, label: "100% Local" },
  { icon: Feather, label: "Manifest V3" },
  { icon: GitBranch, label: "Open Source" },
];

function ProblemRow({ problem, hidden, index }) {
  return (
    <div
      className="flex items-center justify-between border-b border-border/60 px-5 py-3.5 last:border-b-0"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted">{problem.id}.</span>
        <span className="text-sm font-medium text-ink">{problem.title}</span>
      </div>
      {hidden ? (
        <span
          className="h-5 w-14 animate-pulse rounded-full bg-border/70"
          aria-label="Difficulty hidden"
        />
      ) : (
        <span
          className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold ${DIFFICULTY_STYLES[problem.difficulty]}`}
        >
          {problem.difficulty}
        </span>
      )}
    </div>
  );
}

function Hero() {
  const [hidden, setHidden] = useState(true);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-8 lg:pt-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            A Chrome extension for unbiased practice
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hide Difficulty.
            <br />
            <span className="text-primary">Not Your Potential.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Train your intuition by hiding LeetCode difficulty labels and
            solve problems without subconscious bias.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={DOWNLOAD_ZIP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover active:scale-95"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download ZIP
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-muted"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View on GitHub
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-3">
            {STATS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card/50 px-4 py-3"
              >
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                <dt className="sr-only">Product attribute</dt>
                <dd className="text-sm font-semibold text-ink">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — signature mockup */}
        <div className="relative animate-fade-in lg:pl-6">
          <div className="animate-float relative mx-auto max-w-md rounded-3xl border border-border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
            {/* browser chrome */}
            <div className="flex items-center justify-between rounded-t-3xl border-b border-border px-5 py-3.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              </div>
              <span className="font-mono text-[11px] text-muted">
                leetcode.com/problemset
              </span>
              <span className="w-9" aria-hidden="true" />
            </div>

            {/* toggle */}
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {hidden ? "After — difficulty hidden" : "Before"}
              </span>
              <button
                type="button"
                onClick={() => setHidden((v) => !v)}
                aria-pressed={hidden}
                aria-label="Toggle difficulty visibility preview"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-muted"
              >
                {hidden ? (
                  <EyeOff className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                ) : (
                  <Eye className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                )}
                {hidden ? "Show" : "Hide"}
              </button>
            </div>

            <div className="overflow-hidden">
              {PROBLEMS.map((p, i) => (
                <ProblemRow key={p.id} problem={p} hidden={hidden} index={i} />
              ))}
            </div>

            {/* floating extension popup */}
            <div className="animate-float absolute -bottom-8 -right-6 w-48 rounded-2xl border border-border bg-card p-3.5 shadow-xl shadow-black/50 [animation-delay:1.2s] sm:-right-10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-ink">
                  LeetDiff Hider
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg bg-bg px-2.5 py-2">
                <span className="text-[11px] text-muted">Hide labels</span>
                <span className="flex h-4 w-7 items-center rounded-full bg-primary p-0.5">
                  <span className="h-3 w-3 translate-x-3 rounded-full bg-bg transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
