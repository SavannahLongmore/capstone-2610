const navButton = document.getElementById("navButton");
const primaryNav = document.getElementById("primaryNav");

if (navButton && primaryNav) {
  navButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = primaryNav.classList.toggle("show");
    navButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = primaryNav.contains(event.target);
    const clickedToggle = navButton.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
      primaryNav.classList.remove("show");
      navButton.setAttribute("aria-expanded", "false");
    }
  });
}

// FOOTER YEAR
const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}