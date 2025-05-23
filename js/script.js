document.addEventListener("DOMContentLoaded", () => {
  // Select all images inside a .shortlist div
  const shortlistIcons = document.querySelectorAll(".shortlist img");

  shortlistIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const currentSrc = icon.getAttribute("src");

      if (currentSrc.includes("selected.png")) {
        icon.setAttribute("src", "./assets/unselected.png");
      } else {
        icon.setAttribute("src", "./assets/selected.png");
      }
      if (currentSrc.includes("unselected.png")) {
        icon.setAttribute("src", "./assets/selected.png");
      } else {
        icon.setAttribute("src", "./assets/unselected.png");
      }
    });
  });
});
