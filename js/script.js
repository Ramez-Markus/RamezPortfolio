//Nav Section
let navs = document.querySelector(".Navs");
let menu_bar = document.querySelector(".menu-icon");
let allNavs = document.querySelectorAll(".Navs li");
let sections = document.querySelectorAll("section");
// Toggle menu when clicking menu bar (only mobile)
menu_bar.onclick = () => {
  if (window.innerWidth <= 768) {
    navs.style.display = (navs.style.display === "flex" ? "none" : "flex");
  }
};
// When clicking a nav item
allNavs.forEach(item => {
  item.addEventListener("click", function () {
    // remove active from all
    allNavs.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");

    // Close menu ONLY on mobile
    if (window.innerWidth <= 904) {
      navs.style.display = "none";
    }
  });
});
// Ensure nav is always visible on desktop resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 905) {
    navs.style.display = "flex";
  } else {
    navs.style.display = "none"; // reset for mobile
  }
});
window.addEventListener("scroll", () => {
  let current = "";

  let scrollPos = window.scrollY + window.innerHeight /7; 

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  allNavs.forEach(nav => {
    nav.classList.remove("active");
    if (nav.getAttribute("data-target") === current) {
      nav.classList.add("active");
    }
  });
});
//End of Nav Section
