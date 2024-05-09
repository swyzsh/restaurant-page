function aboutSection() {
  const contentContainer = document.getElementById('content');
  contentContainer.classList.add("about-content");
  contentContainer.classList.remove("home-content");
  contentContainer.classList.remove("menu-content");

  const shopDesc = document.createElement('p');
  shopDesc.classList.add("shop-desc");
  shopDesc.innerHTML = `Roman’s serves spirited, Italian-influenced food that reflects a longstanding commitment to local agriculture and sustainability. Our menu celebrates our relationships with area farmers, tradition-based artisans, agricultural-based Italian importers, and winemakers.<br><br>While the experience at Roman’s showcases our focus on procuring the highest quality food and wine, we are, above all, committed to making our industry a more equitable and sustainable home for all of those who work in it.`;
  contentContainer.appendChild(shopDesc);

  const leadership = document.createElement('span');
  leadership.classList.add("leadership");
  leadership.innerHTML = `Chef: Hannah Shizgal-Paris<br>Sous Chefs: Jose Genao & Steve Handy<br>General Manager: Brittany Tinelli<br>Assistant General Manager: Fernando Cambeiro`;
  contentContainer.appendChild(leadership);

  const hourLocContainer = document.createElement('div'); 
  hourLocContainer.id = "hourLoco";
  contentContainer.appendChild(hourLocContainer);
  const hours = document.createElement('span');
  hours.innerHTML = `HOURS<br><br>DINNER: Monday - Sunday, 5 pm - 10:30 pm<br>LUNCH: Saturday & Sunday, 11 am - 3 pm`;
  hourLocContainer.appendChild(hours);
  const location = document.createElement('span');
  location.innerHTML = `LOCATION<br><br>243 Dekalb Ave, Brooklyn, NY 11205<br>718.622.5300<br>hello@romansnyc.com`;
  hourLocContainer.appendChild(location);
}
export default aboutSection;