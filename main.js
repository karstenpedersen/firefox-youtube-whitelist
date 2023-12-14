const whitelist = [
  "markiplier",
  "vimjoyer"
];

const container = document.getElementById('content');
const config = {
  childList: true,
  subtree: true
};

function filterPreviews(mutationList, observer) {
  const previews = document.querySelectorAll("#content.ytd-rich-item-renderer");
  for (const preview of previews) {
    // Get avatar
    const avatar = preview.querySelector("a#avatar-link");
    if (!avatar) continue;

    const href = avatar.getAttribute("href");
    if (!href) continue;

    const name = href.slice(2).toLowerCase();

    // Remove non-whitelisted previews
    if (!whitelist.includes(name)) {
      preview.remove();
    }
  }
}

function observe() {
  const observer = new MutationObserver(filterPreviews);
  observer.observe(container, config);
}

observe();
