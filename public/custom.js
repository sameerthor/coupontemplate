// Open header dropdown on hover
document.addEventListener("DOMContentLoaded", function () {
  
  const dropdownHoverElements = document.querySelectorAll(".dropdown-hover");

  dropdownHoverElements.forEach(function (dropdown) {
      const menu = dropdown.querySelector(".dropdown-menu");
      const toggle = dropdown.querySelector(".dropdown-toggle");

      dropdown.addEventListener("mouseover", function () {
          if (menu && toggle) {
              menu.classList.add("show");
              toggle.classList.add("show");
              toggle.setAttribute("aria-expanded", "true");
          }
      });

      dropdown.addEventListener("mouseout", function () {
          if (menu && toggle) {
              menu.classList.remove("show");
              toggle.classList.remove("show");
              toggle.setAttribute("aria-expanded", "false");
          }
      });
  });
});
