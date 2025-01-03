var  headerNav = document.querySelector(".headerNav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  headerNav.classList.toggle("openSearch");
  headerNav.classList.remove("openNav");

    const icon = searchIcon.querySelector("svg");

    if (headerNav.classList.contains("openSearch")) {
        
        icon.innerHTML = `<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>`;
    } else {
        
        icon.innerHTML = `<path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8-9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>`;
    }
});

navOpenBtn.addEventListener("click", () => {
  headerNav.classList.add("openNav");
  headerNav.classList.remove("openSearch");

    const icon = searchIcon.querySelector("svg");
 
    icon.innerHTML = `<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>`;
});

navCloseBtn.addEventListener("click", () => {
  headerNav.classList.remove("openNav");
});

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
