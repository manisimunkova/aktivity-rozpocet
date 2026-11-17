// Data pro aktivitu „Měsíc s kapesným“.
// Texty a částky můžeš libovolně upravit (částky jen jako číslo, v Kč).

window.KAPESNE = 800; // kapesné na celý měsíc

// Cíle, na které dítě spoří. „nasporeno“ = kolik už má v prasátku na začátku.
window.CILE = [
  { ikona: '🎧', nazev: 'Bezdrátová sluchátka', cena: 1500, nasporeno: 1000 },
  { ikona: '🎤', nazev: 'Lístek na koncert',    cena: 1290, nasporeno: 790 },
  { ikona: '🎮', nazev: 'Nová hra na konzoli',  cena: 1899, nasporeno: 1399 },
];

// Kolik si může dát stranou hned na začátku měsíce
window.ODLOZIT_NA_ZACATKU = [0, 100, 200, 300, 400];

// Názvy kategorií útrat (ukážou se ve výsledcích)
window.KATEGORIE = {
  jidlo: '🧋 Jídlo a pití',
  zabava: '🎉 Zábava',
  darky: '🎁 Dárky',
  necekane: '⚠️ Nečekané výdaje',
  skola: '🏫 Škola',
  drogerie: '🧴 Drogerie',
};

// Události po týdnech.
//   typ 'vyber'   – dítě vybírá z možností (cena 0 = zadarmo)
//   typ 'povinne' – zaplatit se musí; když nestačí peněženka, doplatí se z prasátka
//   typ 'prijem'  – peníze navíc; možnosti říkají, kolik z nich jde do prasátka
window.UDALOSTI = [
  { tyden: 1, typ: 'vyber', ikona: '🧋',
    text: 'Kamarádi jdou po škole na bubble tea.',
    moznosti: [
      { text: 'Jdu a dám si taky', cena: 99, kategorie: 'jidlo' },
      { text: 'Jdu, ale nic si nedám', cena: 0 },
      { text: 'Dnes nejdu', cena: 0 },
    ] },
  { tyden: 1, typ: 'vyber', ikona: '🎮',
    text: 'Ve hře vyšel nový skin. Má ho skoro celá třída.',
    moznosti: [
      { text: 'Koupit skin', cena: 249, kategorie: 'zabava' },
      { text: 'Nekoupit', cena: 0 },
    ] },
  { tyden: 2, typ: 'vyber', ikona: '🎂',
    text: 'Tvůj nejlepší kamarád má narozeniny.',
    moznosti: [
      { text: 'Koupit dárek v obchodě', cena: 250, kategorie: 'darky' },
      { text: 'Složit se s ostatními na společný dárek', cena: 100, kategorie: 'darky' },
      { text: 'Vyrobit dárek sám/sama', cena: 40, kategorie: 'darky' },
    ] },
  { tyden: 2, typ: 'vyber', ikona: '📱',
    text: 'Spadl ti telefon a praskl obal.',
    moznosti: [
      { text: 'Nový pevný obal', cena: 199, kategorie: 'necekane' },
      { text: 'Levný obal', cena: 79, kategorie: 'necekane' },
      { text: 'Nechat to být', cena: 0 },
    ] },
  { tyden: 3, typ: 'prijem', ikona: '👵', castka: 300,
    text: 'Babička ti k svátku poslala 300 Kč.',
    moznosti: [
      { text: 'Všechno do peněženky', doPrasatka: 0 },
      { text: 'Půl na půl', doPrasatka: 150 },
      { text: 'Všechno do prasátka', doPrasatka: 300 },
    ] },
  { tyden: 3, typ: 'povinne', ikona: '🦒', cena: 150, kategorie: 'skola',
    text: 'Ve škole se vybírá na výlet do ZOO. Platí všichni.' },
  { tyden: 4, typ: 'vyber', ikona: '🧴',
    text: 'Došel ti deodorant. V drogerii je akce 2 + 1 zdarma.',
    moznosti: [
      { text: 'Vzít 3 kusy za cenu dvou', cena: 178, kategorie: 'drogerie' },
      { text: 'Koupit jen jeden', cena: 89, kategorie: 'drogerie' },
    ] },
  { tyden: 4, typ: 'vyber', ikona: '🎬',
    text: 'V sobotu jde parta do kina.',
    moznosti: [
      { text: 'Kino a k tomu popcorn', cena: 320, kategorie: 'zabava' },
      { text: 'Jen kino', cena: 190, kategorie: 'zabava' },
      { text: 'Navrhnu film doma u kamaráda', cena: 0 },
    ] },
];
