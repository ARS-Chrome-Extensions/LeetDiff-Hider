const toggle = document.getElementById("difficulty");

chrome.storage.sync.get(["difficulty"], (result) => {
    toggle.checked = result.difficulty ?? true;
});

toggle.addEventListener("change", () => {
    chrome.storage.sync.set({
        difficulty: toggle.checked
    });
});