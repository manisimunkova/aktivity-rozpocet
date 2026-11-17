// Data pro aktivitu „Kolik hodin brigády to stojí?“
// Texty a ceny můžeš libovolně upravit (ceny jen jako číslo, bez mezer).

window.SAZBA = {
  vychozi: 135,   // hodinová mzda, se kterou aktivita začne (Kč)
  min: 100,       // nejnižší hodnota na posuvníku
  max: 250,       // nejvyšší hodnota na posuvníku
  krok: 5,
  // Poznámka pod posuvníkem. Zdroj: nařízení vlády o minimální mzdě pro rok 2026
  // (22 400 Kč měsíčně, 134,40 Kč za hodinu). Ověř si před workshopem.
  poznamka: 'Minimální mzda je v roce 2026 134,40 Kč za hodinu. Brigádu můžeš mít od 15 let, až po skončení povinné školní docházky.',
};

// Délka jedné brigády v hodinách (pro větu „to je N odpolední brigády“)
window.HODIN_NA_BRIGADU = 4;

window.VECI = [
  { ikona: '🧋', nazev: 'Bubble tea',               cena: 99 },
  { ikona: '🍕', nazev: 'Pizza s kamarády',         cena: 250 },
  { ikona: '🎤', nazev: 'Lístek na koncert',        cena: 1290 },
  { ikona: '👟', nazev: 'Tenisky',                  cena: 1800 },
  { ikona: '🎮', nazev: 'Nová hra na konzoli',      cena: 1899 },
  { ikona: '🎵', nazev: 'Spotify na celý rok',      cena: 2028 },
  { ikona: '🛹', nazev: 'Skateboard',               cena: 2200 },
  { ikona: '🎧', nazev: 'Bezdrátová sluchátka',     cena: 2490 },
  { ikona: '✈️', nazev: 'Letenka do Lisabonu',      cena: 6000 },
  { ikona: '📱', nazev: 'Nový telefon',             cena: 19990 },
];
