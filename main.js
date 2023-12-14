const previewSelector = "ytd-rich-item-renderer";
const avatarSelector = "a";
const whitelist = [];

window.addEventListener("load", () => {
  const previews = document.querySelectorAll(previewSelector);

  previews.forEach(p => {
    const avatar = p.querySelectorAll(avatarSelector);
    const href = avatar.getAttribute("href");

    if (!whitelist.includes(href)) {
      p.style.display = "none !important";
    }
  });
});

