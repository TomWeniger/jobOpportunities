let openMenu = document.querySelector(".menu-btn");
let displayMenu = document.querySelector("nav");

let hamburgerDisplay = false;

openMenu.addEventListener("click", () => {
  if (!hamburgerDisplay) {
    openMenu.classList.add("open");
    displayMenu.classList.add("display-active");
    hamburgerDisplay = true;
  } else {
    openMenu.classList.remove("open");
    displayMenu.classList.remove("display-active");
    hamburgerDisplay = false;
  }
});
