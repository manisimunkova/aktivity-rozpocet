// Data pro aktivitu „Moje výdaje za měsíc“.
// Kategorie a věci můžeš libovolně upravit, přidat nebo smazat.
//   ikona – emoji
//   nazev – co to je
//   cena  – obvyklá cena za jeden kus v Kč (dítě ji může přepsat)
//   jednotka – volitelně: text za cenou (výchozí „za kus“)

window.KATEGORIE_VYDAJU = [
  { nazev: 'Jídlo a pití', ikona: '🍔', polozky: [
    { ikona: '🥪', nazev: 'Svačina v bufetu nebo automatu', cena: 40 },
    { ikona: '🍫', nazev: 'Sladkosti a chipsy', cena: 35 },
    { ikona: '🥤', nazev: 'Pití (limonáda, energeťák)', cena: 35 },
    { ikona: '🧋', nazev: 'Bubble tea nebo kafe', cena: 99 },
    { ikona: '🍟', nazev: 'Fast food s kamarády', cena: 150 },
  ] },
  { nazev: 'Hry, aplikace a předplatné', ikona: '🎮', polozky: [
    { ikona: '🎵', nazev: 'Předplatné (hudba, filmy…)', cena: 169, jednotka: 'za měsíc' },
    { ikona: '💎', nazev: 'Nákupy ve hrách (skiny, mince…)', cena: 249 },
    { ikona: '📲', nazev: 'Placená aplikace', cena: 99 },
  ] },
  { nazev: 'Zábava', ikona: '🎉', polozky: [
    { ikona: '🎬', nazev: 'Kino', cena: 190 },
    { ikona: '🎳', nazev: 'Akce s kamarády (bowling, trampolíny…)', cena: 200 },
    { ikona: '🎤', nazev: 'Koncert nebo zápas', cena: 500 },
  ] },
  { nazev: 'Oblečení a vzhled', ikona: '👕', polozky: [
    { ikona: '👕', nazev: 'Oblečení nebo boty', cena: 600 },
    { ikona: '🧴', nazev: 'Kosmetika a drogerie', cena: 120 },
    { ikona: '💇', nazev: 'Kadeřník', cena: 300 },
  ] },
  { nazev: 'Doprava', ikona: '🚌', polozky: [
    { ikona: '🎫', nazev: 'Jízdenka na jednu cestu', cena: 30 },
    { ikona: '🚌', nazev: 'Měsíční jízdenka', cena: 250, jednotka: 'za měsíc' },
  ] },
  { nazev: 'Telefon', ikona: '📱', polozky: [
    { ikona: '📶', nazev: 'Kredit nebo tarif', cena: 250, jednotka: 'za měsíc' },
  ] },
  { nazev: 'Dárky', ikona: '🎁', polozky: [
    { ikona: '🎁', nazev: 'Dárek pro kamaráda nebo rodinu', cena: 250 },
  ] },
  { nazev: 'Škola a koníčky', ikona: '📚', polozky: [
    { ikona: '✏️', nazev: 'Školní pomůcky', cena: 80 },
    { ikona: '⚽', nazev: 'Kroužek, trénink, vybavení', cena: 300 },
  ] },
];
