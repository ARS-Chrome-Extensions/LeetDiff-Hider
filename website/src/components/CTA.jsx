import { Download, Github } from "lucide-react";
import { DOWNLOAD_ZIP_URL, GITHUB_REPO_URL } from "../lib/links";

function CTA() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="bg-grid relative overflow-hidden rounded-3xl border border-border bg-card/70 px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Ready to solve without bias?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Remove difficulty labels and focus on what truly matters.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DOWNLOAD_ZIP_URL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover active:scale-95"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download ZIP
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-muted"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
