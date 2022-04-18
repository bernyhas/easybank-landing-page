const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-wrapper");

menuToggle.addEventListener("click", function () {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    menuToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    menuToggle.setAttribute("aria-expanded", false);
  }
});
