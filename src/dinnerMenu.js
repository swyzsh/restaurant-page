function dinnerMenu() {
  const dinnerPage = document.createElement('div');
  dinnerPage.classList.add("menuPage");

  const heading1 = document.createElement('h2');
  heading1.textContent = "FIRST"
  const h1sp1 = document.createElement('span');
  h1sp1.innerHTML = `OLIVES<br><span style="font-size: 16px;">$9</span>`;
  const h1sp2 = document.createElement('span');
  h1sp2.innerHTML = `ANTIPASTI PLATE<br><span style="font-size: 16px;">$22</span>`;
  const h1sp3 = document.createElement('span');
  h1sp3.innerHTML = `FAVA BEAN PUREE<br><span style="font-size: 16px;">$18</span>`;
  const h1sp4 = document.createElement('span');
  h1sp4.innerHTML = `CROSTINI OF SNAP PEAS, MINT AND FINOCCHIONA<br><span style="font-size: 16px;">$16</span>`;
  const h1sp5 = document.createElement('span');
  h1sp5.innerHTML = `SQUACQUERONE, ASPARAGUS, WHITE BEANS AND BOTTARGA<br><span style="font-size: 16px;">$22</span>`;
  const h1sp6 = document.createElement('span');
  h1sp6.innerHTML = `LETTUCES, HAZELNUTS, MUSTARD VINAIGRETTE AND PECORINO<br><span style="font-size: 16px;">$23</span>`;
  const heading1span = [h1sp1, h1sp2, h1sp3, h1sp4, h1sp5, h1sp6];
  dinnerPage.appendChild(heading1);
  heading1span.forEach(span => {
    heading1.appendChild(span);
  }); 

  const heading2 = document.createElement('h2');
  heading2.textContent = "SECOND"
  const h2sp1 = document.createElement('span');
  h2sp1.innerHTML = `TAGLIATELLE, FAVA LEAF PESTO AND ASPARAGUS<br><span style="font-size: 16px;">$27</span>`;
  const h2sp2 = document.createElement('span');
  h2sp2.innerHTML = `LINGUINE, CLAMS, WILD FENNEL AND CHILE<br><span style="font-size: 16px;">$28</span>`;
  const h2sp3 = document.createElement('span');
  h2sp3.innerHTML = `MEZZE RIGATONI, PORK RAGU, TOMATO AND OLIVES<br><span style="font-size: 16px;">$28</span>`;
  const heading2span = [h2sp1, h2sp2, h2sp3];
  dinnerPage.appendChild(heading2);
  heading2span.forEach(span => {
    heading2.appendChild(span);
  });

  const heading3 = document.createElement('h2');
  heading3.textContent = "THIRD"
  const h3sp1 = document.createElement('span');
  h3sp1.innerHTML = `SWORDFISH, POTATOES, SUN DRIED TOMATOES AND PINE NUTS<br><span style="font-size: 16px;">$39</span>`;
  const h3sp2 = document.createElement('span');
  h3sp2.innerHTML = `CHICKEN DIAVOLO WITH BROCCOLINI<br><span style="font-size: 16px;">$44</span>`;
  const h3sp3 = document.createElement('span');
  h3sp3.innerHTML = `PORK PORTERHOUSE, GRILLED RAMPS AND CHICKPEAS<br><span style="font-size: 16px;">$43</span>`;
  const heading3span = [h3sp1, h3sp2, h3sp3];
  dinnerPage.appendChild(heading3);
  heading3span.forEach(span => {
    heading3.appendChild(span);
  });

  const heading4 = document.createElement('h2');
  heading4.textContent = "DESERT"
  const h4sp1 = document.createElement('span');
  h4sp1.innerHTML = `CREMA CAPRINO, WALNUTS AND HONEY<br><span style="font-size: 16px;">$13</span>`;
  const h4sp2 = document.createElement('span');
  h4sp2.innerHTML = `PANNA COTTA WITH STRAWBERRIES AND APPLE BALSAMIC<br><span style="font-size: 16px;">$13</span>`;
  const h4sp3 = document.createElement('span');
  h4sp3.innerHTML = `OLIVE OIL CAKE, ROASTED RHUBARB AND CREME FRAICHE<br><span style="font-size: 16px;">$15</span>`;
  const h4sp4 = document.createElement('span');
  h4sp4.innerHTML = `MINT STRACCIATELLA ICE CREAM<br><span style="font-size: 16px;">$9</span>`;
  const h4sp5 = document.createElement('span');
  h4sp5.innerHTML = `CHOCOLATE SORBETTO<br><span style="font-size: 16px;">$9</span>`;
  const h4sp6 = document.createElement('span');
  h4sp6.innerHTML = `AFFOGATO<br><span style="font-size: 16px;">$12</span>`;
  const heading4span = [h4sp1, h4sp2, h4sp3, h4sp4, h4sp5, h4sp6];
  dinnerPage.appendChild(heading4);
  heading4span.forEach(span => {
    heading4.appendChild(span);
  });

  return dinnerPage;
}
export default dinnerMenu;