function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger-menu");

  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove("active");
  }
});
