function wineMenu() {
  const winePage = document.createElement('div');
  winePage.classList.add("menuPage");

  const heading1 = document.createElement('h2');
  heading1.textContent = "SPARKLING"
  const h1sp1 = document.createElement('span');
  h1sp1.innerHTML = `KOI 'ORSU'<br><span style="font-size: 16px;">TREBBIANO, MOSCATO | EMILIA-ROMAGNA 2021<br>$86</span>`;
  const h1sp2 = document.createElement('span');
  h1sp2.innerHTML = `ANTICA FRATTA FRANCIACORTA BRUT<br><span style="font-size: 16px;">CHARDONNAY, PINOT NOIR | LOMBARDIA NV<br>$96</span>`;
  const h1sp3 = document.createElement('span');
  h1sp3.innerHTML = `CIECK 'SAN GIORGIO'<br><span style="font-size: 16px;">ERBALUCE | PIEMONTE 2018<br>$94</span>`;
  const h1sp4 = document.createElement('span');
  h1sp4.innerHTML = `MUNI DI DANIELE PICCININ 'ARIONE'<br><span style="font-size: 16px;">DURELLA | VENETO 2018<br>$110</span>`;
  const h1sp5 = document.createElement('span');
  h1sp5.innerHTML = `RUGE 'L'ESSENZIALE' COL FONDO<br><span style="font-size: 16px;">GLERA | VENETO 2022<br>$68</span>`;
  const h1sp6 = document.createElement('span');
  h1sp6.innerHTML = `COSTADILA 'MOZ'<br><span style="font-size: 16px;">MOSCATO FIOR D'ARANCIO, GLERA | VENETO NV<br>$74</span>`;
  const h1sp7 = document.createElement('span');
  h1sp7.innerHTML = `TANCA NICA 'GHRIBI'<br><span style="font-size: 16px;">ZIBBIBO | PANTELLERIA 2022<br>$155</span>`; 
  const h1sp8 = document.createElement('span');
  h1sp8.innerHTML = `LELARGE-PUGEOT 'LUNA VOL.2' CHAMPAGNE<br><span style="font-size: 16px;">CHARDONNAY, PINOT NOIR | FRANCE 2015<br>$298</span>`; 
  const h1sp9 = document.createElement('span');
  h1sp9.innerHTML = `VILLA PICTA 'SOGNARE! SOGNARE!'<br><span style="font-size: 16px;">LAMBRUSCO SORBARA | LOMBARDIA 2020<br>$98</span>`; 
  const h1sp10 = document.createElement('span');
  h1sp10.innerHTML = `KOI 'VISIO'<br><span style="font-size: 16px;">LAMBRUSCO SORBARA AND MAESTRI, TREBBIANO | EMILIA-ROMAGNA 2021<br>$96</span>`;
  const h1sp11 = document.createElement('span');
  h1sp11.innerHTML = `SILVIO MESSANA 'GHAZII'<br><span style="font-size: 16px;">SANGIOVESE | TOSCANA 2021<br>$72</span>`;
  const h1sp12 = document.createElement('span');
  h1sp12.innerHTML = `PODERE SOTTOILNOCE 'SALDALAMA'<br><span style="font-size: 16px;">LAMBRUSCO BLEND | EMILIA-ROMAGNA 2021<br>$76</span>`;
  const h1sp13 = document.createElement('span');
  h1sp13.innerHTML = `TERREVIVE 'STIOLOROSSO'<br><span style="font-size: 16px;">LMABRUSCO DI SORBARA | EMILIA-ROMAGNA 2021<br>$90</span>`;

  const heading1span = [h1sp1, h1sp2, h1sp3, h1sp4, h1sp5, h1sp6, h1sp7, h1sp8, h1sp9, h1sp10, h1sp11, h1sp12, h1sp13];
  winePage.appendChild(heading1);
  heading1span.forEach(span => {
    heading1.appendChild(span);
  });

  const heading2 = document.createElement('h2');
  heading2.textContent = "WHITE"
  const h2sp1 = document.createElement('span');
  h2sp1.innerHTML = `BURGERHOF MESSNER ‘ACKERLEN’<br><span style="font-size: 16px;">SOLARIS, MUSCARIS | ALTO ADIGE 2019<br>$96</span>`;
  const h2sp2 = document.createElement('span');
  h2sp2.innerHTML = `MARCO SARA 'MONTE DELLA GUARDA'<br><span style="font-size: 16px;">TOCAI FRIULANO, PICOLIT | FRIULI 2019<br>$104</span>`;
  const h2sp3 = document.createElement('span');
  h2sp3.innerHTML = `LA GUGLIA<br><span style="font-size: 16px;">GARGANEGA | VENETO 2021<br>$76</span>`;
  const h2sp4 = document.createElement('span');
  h2sp4.innerHTML = `CANTINA ROENO 'REPANDA'<br><span style="font-size: 16px;">SOLARIS | VENETO 2021<br>$68</span>`;
  const h2sp5 = document.createElement('span');
  h2sp5.innerHTML = `GIOVANNI EDERLE 'DONNA FRANCESCA'<br><span style="font-size: 16px;">GARGANEGA, CHARDONNAY | VENETO 2020<br>$84</span>`;
  const h2sp6 = document.createElement('span');
  h2sp6.innerHTML = `CANTRINA 'RINÉ'<br><span style="font-size: 16px;">RIESLING, CHARDONNAY, INCROCIO MANZONI | LOMBARDIA 2020<br>$66</span>`;
  const h2sp7 = document.createElement('span');
  h2sp7.innerHTML = `GIRO DI VITE 'ELIANTA'<br><span style="font-size: 16px;">MALVASIA MOSCATA | PIEMONTE 2021<br>$70</span>`; 
  const h2sp8 = document.createElement('span');
  h2sp8.innerHTML = `CIECK<br><span style="font-size: 16px;">ERBALUCE DI CALUSO | PIEMONTE 2022<br>$70</span>`; 
  const h2sp9 = document.createElement('span');
  h2sp9.innerHTML = `LA COLOMBERA 'DERTHONA'<br><span style="font-size: 16px;">TIMORASSO | PIEMONTE 2022<br>$68</span>`; 
  const h2sp10 = document.createElement('span');
  h2sp10.innerHTML = `I PASTINI 'FARAONE'<br><span style="font-size: 16px;">VERDECA | PUGLIA 2021<br>$64</span>`;
  const h2sp11 = document.createElement('span');
  h2sp11.innerHTML = `SALVATORE MARINO ‘TURI’<br><span style="font-size: 16px;">CATARATTO | SICILIA 2022<br>$68</span>`;
  const h2sp12 = document.createElement('span');
  h2sp12.innerHTML = `EDUARDO TORRES ACOSTA ‘VERSANTE NORD’<br><span style="font-size: 16px;">FIELD BLEND | SICILIA 2022<br>$98</span>`;

  const heading2span = [h2sp1, h2sp2, h2sp3, h2sp4, h2sp5, h2sp6, h2sp7, h2sp8, h2sp9, h2sp10, h2sp11, h2sp12];
  winePage.appendChild(heading2);
  heading2span.forEach(span => {
    heading2.appendChild(span);
  });

  return winePage;
}
export default wineMenu;