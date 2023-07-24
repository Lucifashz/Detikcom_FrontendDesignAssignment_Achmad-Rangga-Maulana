hamburger = document.querySelector(".navbar-toggler");
hamburger.addEventListener("click", () => {
  navBar = document.querySelector(".navbar-nav");
  navBar.classList.toggle("active");
})