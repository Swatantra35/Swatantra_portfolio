const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const closeIcon = document.getElementById("close-icon");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let windowInnerWidth = window.innerWidth;
function menuBarFunction() {
  if (windowInnerWidth < 895) {
    navbar.classList.add("hidden-class");
    closeIcon.classList.add("hidden-class");
    menuIcon.addEventListener("click", () => {
      navbar.classList.remove("hidden-class");
      closeIcon.classList.remove("hidden-class");
      menuIcon.classList.add("hidden-class");
    });

    closeIcon.addEventListener("click", () => {
      navbar.classList.add("hidden-class");
      closeIcon.classList.add("hidden-class");
      menuIcon.classList.remove("hidden-class");
    });
  } else {
    navbar.classList.remove("hidden-class");
    closeIcon.classList.remove("hidden-class");
    menuIcon.classList.remove("hidden-class");
  }
}

menuBarFunction();

window.addEventListener("resize", () => {
  windowInnerWidth = window.innerWidth;
  menuBarFunction();
});
