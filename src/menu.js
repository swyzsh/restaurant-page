function menuSection() {
  const contentContainer = document.getElementById('content');
  contentContainer.classList.remove("home-content");
  contentContainer.classList.remove("about-content");
  contentContainer.classList.add("menu-content");

  const menuSwitcherNav = document.createElement('nav');
  menuSwitcherNav.id = "menuSwitcher";
  contentContainer.appendChild(menuSwitcherNav);

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

  // wine menu
  const wineBtn = document.createElement('button');
  wineBtn.id = "wineBtn";
  wineBtn.innerHTML = "WINE";
  menuSwitcherNav.appendChild(wineBtn);

  const menuSwitcherNavBtns = [dinnerBtn, lunchBtn, wineBtn];

  function handleMenuNav() {
    dinnerBtn.classList.add('selected');
  
    menuSwitcherNavBtns.forEach(button => {
      button.addEventListener('click', function() {
        if (button.id === "dinnerBtn") {
          dinnerBtn.classList.add('selected');
          lunchBtn.classList.remove('selected');
          wineBtn.classList.remove('selected');
        } else if (button.id === "lunchBtn") {
          dinnerBtn.classList.remove('selected');
          lunchBtn.classList.add('selected');
          wineBtn.classList.remove('selected');
        } else if (button.id === "wineBtn") {
          dinnerBtn.classList.remove('selected');
          lunchBtn.classList.remove('selected');
          wineBtn.classList.add('selected');
        }
      });
    });
  }
  handleMenuNav();

}
export default menuSection;