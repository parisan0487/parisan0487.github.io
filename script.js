let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
const toggle = document.getElementById("theme-toggle");
const body = document.body;

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.classList.replace("bx-moon", "bx-sun");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggle.classList.replace("bx-moon", "bx-sun");
  } else {
    localStorage.setItem("theme", "dark");
    toggle.classList.replace("bx-sun", "bx-moon");
  }
});
