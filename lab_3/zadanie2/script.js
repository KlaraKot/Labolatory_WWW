window.onload = () => {
  let existing = false;

  const closeMenu = () => {
    const menu = document.getElementById("Menu");
    menu.style.display = "none";
    existing = false;
  };

  const Menu = (x, y) => {
    if (existing) {
      closeMenu();
    }
    existing = true;
    const menu = document.getElementById("Menu");

    menu.style.display = "block";
    menu.style.left = x + 5 + "px";
    menu.style.top = y + 5 + "px";
  };

  const noContext = document.getElementById("Barcelona");

  noContext.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    Menu(x, y);
  });

  document.addEventListener("click", closeMenu);
};

function obrazek() {
  document.getElementById("Barcelona").src =
    "https://img1.10bestmedia.com/Images/Photos/378808/GettyImages-525241683_54_990x660.jpg";
}
