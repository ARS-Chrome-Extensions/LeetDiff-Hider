import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Does it collect data?",
    answer:
      "No. LeetDiff Hider makes no network requests and stores nothing outside your browser. It only reads and modifies the page you're already looking at.",
  },
  {
    question: "Does it work on Microsoft Edge?",
    answer:
      "Yes. Since Edge is built on Chromium and supports Manifest V3, you can load the same extension folder there through edge://extensions.",
  },
  {
    question: "Can I disable it anytime?",
    answer:
      "Yes. Use the toggle in the extension popup to show difficulty labels again, or turn the extension off entirely from chrome://extensions.",
  },
  {
    question: "Is it open source?",
    answer:
      "Yes. The full source code is public on GitHub under an open license, so you can read exactly what it does or contribute improvements.",
  },
  {
    question: "Does it modify submissions or solutions?",
    answer:
      "No. LeetDiff Hider only hides the visual difficulty label. It never touches your code, submissions, or results in any way.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="rounded-3xl border border-border bg-card/50 transition-colors duration-300 hover:border-muted/60">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-base font-semibold text-ink">
            {question}
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
              isOpen ? "rotate-180 text-primary" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Everything you might want to know before installing.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              {...faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
