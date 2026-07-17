import { Github } from "lucide-react";
import { GITHUB_URL } from "../lib/links";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} LeetDiff Hider. All rights reserved.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="LeetDiff Hider on GitHub"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
