const SELECTORS = `
    .text-sd-easy,
    .text-sd-medium,
    .text-sd-hard,
    .text-difficulty-easy,
    .text-difficulty-medium,
    .text-difficulty-hard
`;

let settings = {
    difficulty: true
};

function updateDifficulty(root = document) {
    if (root.matches?.(SELECTORS)) {
        root.classList.toggle("hidden-by-extension", settings.difficulty);
    }

    root.querySelectorAll(SELECTORS).forEach((el) => {
        el.classList.toggle("hidden-by-extension", settings.difficulty);
    });
}

function loadSettings() {
    chrome.storage.sync.get(["difficulty"], (result) => {
        if (chrome.runtime.lastError) {
            console.warn(chrome.runtime.lastError.message);
            return;
        }

        settings.difficulty = result.difficulty ?? true;
        updateDifficulty();
    });
}

function observePage() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    updateDifficulty(node);
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

function init() {
    loadSettings();

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === "sync" && changes.difficulty) {
            settings.difficulty = changes.difficulty.newValue;
            updateDifficulty();
        }
    });

    observePage();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}