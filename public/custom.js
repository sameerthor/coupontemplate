(function () {
    // Ensure variables are declared only once
    const nav = document.querySelector(".nav");
    const searchIcon = document.querySelector("#searchIcon");
    const navOpenBtn = document.querySelector(".navOpenBtn");
    const navCloseBtn = document.querySelector(".navCloseBtn");
  
    if (nav && searchIcon && navOpenBtn && navCloseBtn) {
      // Handle search icon click
      searchIcon.addEventListener("click", () => {
        nav.classList.toggle("openSearch");
        nav.classList.remove("openNav");
  
        // Toggle search icon class
        if (nav.classList.contains("openSearch")) {
          searchIcon.classList.replace("fa-search", "fa-times");
          return;
        }
        searchIcon.classList.replace("fa-times", "fa-search");
      });
  
      // Handle nav open button click
      navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        nav.classList.remove("openSearch");
        searchIcon.classList.replace("fa-times", "fa-search");
      });
  
      // Handle nav close button click
      navCloseBtn.addEventListener("click", () => {
        nav.classList.remove("openNav");
      });
    }
  
  
  })();
  