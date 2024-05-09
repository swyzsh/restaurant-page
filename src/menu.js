import dinnerMenu from "./dinnerMenu.js";
import lunchMenu from "./lunchMenu.js";
import wineMenu from "./wineMenu.js";

function menuSection() {
  const contentContainer = document.getElementById('content');
  contentContainer.classList.remove("home-content");
  contentContainer.classList.remove("about-content");
  contentContainer.classList.add("menu-content");

  const menuSwitcherNav = document.createElement('nav');
  menuSwitcherNav.id = "menuSwitcher";
  contentContainer.appendChild(menuSwitcherNav);

  const menuContainer = document.createElement('div');
  menuContainer.id = "menuContainer";
  contentContainer.appendChild(menuContainer);

  // dinner menu
  const dinnerBtn = document.createElement('button');
  dinnerBtn.id = "dinnerBtn";
  dinnerBtn.innerHTML = "DINNER";
  menuSwitcherNav.appendChild(dinnerBtn);

  // lunch menu
  const lunchBtn = document.createElement('button');
  lunchBtn.id = "lunchBtn";
  lunchBtn.innerHTML = "LUNCH";
  menuSwitcherNav.appendChild(lunchBtn);

  const lunchPage = document.createElement('div');
  lunchPage.textContent = "lunch";

  // wine menu
  const wineBtn = document.createElement('button');
  wineBtn.id = "wineBtn";
  wineBtn.innerHTML = "WINE";
  menuSwitcherNav.appendChild(wineBtn);

  const winePage = document.createElement('div');
  winePage.textContent = "wine";

  const menuSwitcherNavBtns = [dinnerBtn, lunchBtn, wineBtn];
  function handleMenuNav() {

    menuContainer.appendChild(dinnerMenu());
    dinnerBtn.classList.add('selected');

    menuSwitcherNavBtns.forEach(button => {
      button.addEventListener('click', function() {

        if (button.id === "dinnerBtn") {
          lunchBtn.classList.remove('selected');
          wineBtn.classList.remove('selected');
          dinnerBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild(dinnerMenu());

        } else if (button.id === "lunchBtn") {
          dinnerBtn.classList.remove('selected');
          wineBtn.classList.remove('selected');
          lunchBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild(lunchMenu());

        } else if (button.id === "wineBtn") {
          dinnerBtn.classList.remove('selected');
          lunchBtn.classList.remove('selected');
          wineBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild(wineMenu());
        }
      });
    });
  }
  handleMenuNav();

  function clearElement(element) {
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
export default menuSection;