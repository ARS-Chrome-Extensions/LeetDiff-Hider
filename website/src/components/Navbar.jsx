import { useEffect, useState } from "react";
import { Download, Github, Menu, X, EyeOff } from "lucide-react";
import { DOWNLOAD_ZIP_URL, GITHUB_REPO_URL } from "../lib/links";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Installation", href: "#installation" },
  { label: "FAQ", href: "#faq" },
  { label: "GitHub", href: GITHUB_REPO_URL, external: true },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-ink"
          aria-label="LeetDiff Hider, back to top"
        >
          <img
              src="/logo.svg"
              alt="Logo"
              className="h-12 w-12"
              aria-hidden="true"
            />
          <span className="text-[15px] font-semibold tracking-tight">
            LeetDiff Hider
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={DOWNLOAD_ZIP_URL}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-muted"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download ZIP
          </a>
          <span className="relative inline-flex">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-primary/40 px-4 py-2 text-sm font-semibold text-ink/70"
            >
              Add to Chrome
            </button>
            <span className="absolute -top-2.5 -right-2.5 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-bg">
              Soon
            </span>
          </span>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-bg px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={DOWNLOAD_ZIP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-ink"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download ZIP
            </a>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-primary/40 px-4 py-2.5 text-sm font-semibold text-ink/70"
            >
              Add to Chrome · Coming Soon
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
