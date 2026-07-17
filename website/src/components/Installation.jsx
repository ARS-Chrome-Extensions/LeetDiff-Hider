import { useState } from "react";
import {
  Store,
  TerminalSquare,
  Download,
  Puzzle,
  SlidersHorizontal,
  FolderCog,
  FolderCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { DOWNLOAD_ZIP_URL } from "../lib/links";

const TABS = [
  { id: "store", label: "Chrome Web Store", icon: Store },
  { id: "manual", label: "Manual Installation", icon: TerminalSquare },
];

const STEPS = [
  {
    icon: Download,
    title: "Download ZIP",
    description: "Grab the latest release from GitHub and unzip it anywhere on your machine.",
  },
  {
    icon: Puzzle,
    title: "Open chrome://extensions",
    description: "Paste chrome://extensions into your address bar and hit enter.",
  },
  {
    icon: SlidersHorizontal,
    title: "Enable Developer Mode",
    description: "Flip the Developer mode switch in the top-right corner of the page.",
  },
  {
    icon: FolderCog,
    title: "Load Unpacked",
    description: "Click 'Load unpacked' and point it at the unzipped extension folder.",
  },
  {
    icon: FolderCheck,
    title: "Select extension folder",
    description: "Choose the folder containing manifest.json to install it.",
  },
];

function Installation() {
  const [tab, setTab] = useState("manual");

  return (
    <section id="installation" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Get set up in a minute
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Install from the store once it's live, or load it yourself today.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Installation method"
          className="mx-auto mt-10 flex max-w-md gap-1 rounded-full border border-border bg-card/60 p-1"
        >
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                tab === id
                  ? "bg-primary text-bg shadow-md shadow-primary/20"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {tab === "store" ? (
            <div
              role="tabpanel"
              className="animate-fade-in rounded-3xl border border-border bg-card/50 p-12 text-center"
            >
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Clock className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                Coming Soon
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
                LeetDiff Hider is pending review on the Chrome Web Store. Use
                manual installation in the meantime.
              </p>
              <button
                type="button"
                onClick={() => setTab("manual")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-muted"
              >
                View manual steps
              </button>
            </div>
          ) : (
            <ol role="tabpanel" className="animate-fade-in space-y-4">
              {STEPS.map(({ icon: Icon, title, description }, i) => (
                <li
                  key={title}
                  className="flex gap-5 rounded-3xl border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-primary/40"
                >
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className="font-mono text-xs text-muted">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-ink">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {description}
                    </p>
                    {title === "Download ZIP" && (
                      <a
                        href={DOWNLOAD_ZIP_URL}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        Get the latest release
                      </a>
                    )}
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-3xl border border-primary/30 bg-primary/5 p-6">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-ink">
                  Done — LeetDiff Hider is active on LeetCode.
                </span>
              </li>
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}

export default Installation;
