function lunchMenu() {
  const lunchPage = document.createElement('div');
  lunchPage.classList.add("menuPage");

  const heading1 = document.createElement('h2');
  heading1.textContent = "LUNCH"
  const h1sp1 = document.createElement('span');
  h1sp1.innerHTML = `OLIVES<br><span style="font-size: 16px;">$9</span>`;
  const h1sp2 = document.createElement('span');
  h1sp2.innerHTML = `GNOCCO FRITTO WITH SALUMI<br><span style="font-size: 16px;">$21</span>`;
  const h1sp3 = document.createElement('span');
  h1sp3.innerHTML = `FAVA BEAN PUREE<br><span style="font-size: 16px;">$18</span>`;
  const h1sp4 = document.createElement('span');
  h1sp4.innerHTML = `LETTUCES, PEPPERS, OLIVES AND RICOTTA DI CAPRA<br><span style="font-size: 16px;">$18</span>`;
  const h1sp5 = document.createElement('span');
  h1sp5.innerHTML = `EGG SALAD, RAMPS AND CRUDITES<br><span style="font-size: 16px;">$19</span>`;
  const h1sp6 = document.createElement('span');
  h1sp6.innerHTML = `BROCCOLI, GARLIC CONFIT, CALABRIAN CHILE AND PECORINO<br><span style="font-size: 16px;">$16</span>`;
  const h1sp7 = document.createElement('span');
  h1sp7.innerHTML = `CAVATELLI, NETTLE PESTO AND SNAP PEAS<br><span style="font-size: 16px;">$22</span>`; 
  const h1sp8 = document.createElement('span');
  h1sp8.innerHTML = `CHITARRA, PORK SAUSAGE AND DANDELION GREENS<br><span style="font-size: 16px;">$23</span>`; 
  const h1sp9 = document.createElement('span');
  h1sp9.innerHTML = `SWORDFISH SPIEDINI, WHITE BEANS, ASPARAGUS AND OLIVE SALSA<br><span style="font-size: 16px;">$25</span>`; 

  const heading1span = [h1sp1, h1sp2, h1sp3, h1sp4, h1sp5, h1sp6, h1sp7, h1sp8, h1sp9];
  lunchPage.appendChild(heading1);
  heading1span.forEach(span => {
    heading1.appendChild(span);
  });

  const heading2 = document.createElement('h2');
  heading2.textContent = "CHEESE & DESSERT"
  const h2sp1 = document.createElement('span');
  h2sp1.innerHTML = `CREMA CAPRINO, WALNUTS AND HONEY<br><span style="font-size: 16px;">$13</span>`;
  const h2sp2 = document.createElement('span');
  h2sp2.innerHTML = `OLIVE OIL CAKE, ROASTED RHUBARB AND CREME FRAICHE<br><span style="font-size: 16px;">$15</span>`;
  const h2sp3 = document.createElement('span');
  h2sp3.innerHTML = `PANNA COTTA WITH STRAWBERRIES AND APPLE BALSAMIC<br><span style="font-size: 16px;">$13</span>`;
  const h2sp4 = document.createElement('span');
  h2sp4.innerHTML = `CHOCOLATE SORBETTO<br><span style="font-size: 16px;">$9</span>`;
  const h2sp5 = document.createElement('span');
  h2sp5.innerHTML = `AFFOGATO<br><span style="font-size: 16px;">$12</span>`;

  const heading2span = [h2sp1, h2sp2, h2sp3, h2sp4, h2sp5];
  lunchPage.appendChild(heading2);
  heading2span.forEach(span => {
    heading2.appendChild(span);
  });

  return lunchPage;
}
export default lunchMenu;