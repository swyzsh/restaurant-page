function homeSection() {
  const contentContainer = document.getElementById('content');
  contentContainer.classList.add("home-content");
  contentContainer.classList.remove("menu-content");
  contentContainer.classList.remove("about-content");

  const title = document.createElement('h1');
  title.textContent = "Roman's";
  contentContainer.appendChild(title);

  const reservationDetail = document.createElement('p');
  reservationDetail.textContent = "Reservations available via Resy, and we always welcome walk-ins. For groups larger than 4 guests, please reach out to us directly at hello@romansnyc.com";
  reservationDetail.classList.add("reservation");
  contentContainer.appendChild(reservationDetail);

  const reservationBtn = document.createElement('button');
  reservationBtn.id = "reservationBtn";
  reservationBtn.innerHTML = "RESERVE";
  contentContainer.appendChild(reservationBtn);
  reservationBtn.addEventListener('click', function() {
    window.open('https://www.romansnyc.com/#/form-reservations', '_self');
  });
}
export default homeSection;