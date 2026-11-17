// Karty pro swipe hru „Nutné, nebo navíc?“
// Texty a ceny můžeš libovolně upravit. Po úpravě stačí soubor uložit
// a stránku v prohlížeči obnovit (F5).
//
// KOLO 1: samotné věci bez příběhu.
//   id    – krátký kód bez mezer (podle něj se karta spáruje s kolem 2)
//   ikona – emoji
//   nazev – co to je
//   cena  – v korunách (jen číslo)
//   pozn  – volitelně: drobný text pod cenou (např. „za měsíc“)
//
// KOLO 2: stejné věci znovu, tentokrát s příběhem.
//   id     – musí být stejné jako u věci v kole 1
//   pribeh – jedna věta, která situaci posune jedním nebo druhým směrem
//   Jedna věc může mít víc příběhů (např. tenisky dvakrát s opačným vyzněním).

window.KOLO_1 = [
  { id: 'svacina',   ikona: '🥪', nazev: 'Svačina ve školním bufetu', cena: 45 },
  { id: 'jizdenka',  ikona: '🚌', nazev: 'Jízdenka na MHD do školy',  cena: 250, pozn: 'na měsíc' },
  { id: 'skin',      ikona: '🎮', nazev: 'Skin do hry',               cena: 249 },
  { id: 'tenisky',   ikona: '👟', nazev: 'Nové tenisky',              cena: 1800 },
  { id: 'spotify',   ikona: '🎵', nazev: 'Spotify Premium',           cena: 169, pozn: 'za měsíc' },
  { id: 'displej',   ikona: '📱', nazev: 'Oprava prasklého displeje', cena: 1500 },
  { id: 'energetak', ikona: '⚡', nazev: 'Energetický nápoj',         cena: 39 },
  { id: 'darek',     ikona: '🎁', nazev: 'Dárek pro mámu k narozeninám', cena: 300 },
  { id: 'kino',      ikona: '🎬', nazev: 'Kino s kamarády',           cena: 220 },
  { id: 'deodorant', ikona: '🧴', nazev: 'Deodorant',                 cena: 89 },
  { id: 'vylet',     ikona: '🏕️', nazev: 'Školní výlet',              cena: 1200 },
  { id: 'bubbletea', ikona: '🧋', nazev: 'Bubble tea',                cena: 99 },
  { id: 'sesit',     ikona: '📚', nazev: 'Pracovní sešit do angličtiny', cena: 190 },
  { id: 'mikina',    ikona: '🧥', nazev: 'Mikina z merche youtubera', cena: 1290 },
  { id: 'data',      ikona: '📶', nazev: 'Mobilní tarif s daty',      cena: 250, pozn: 'za měsíc' },
];

window.KOLO_2 = [
  { id: 'tenisky',   pribeh: 'Staré ti protékají a venku je listopad.' },
  { id: 'tenisky',   pribeh: 'Staré máš půl roku a jsou v pohodě. Tyhle nové ale má půlka třídy.' },
  { id: 'displej',   pribeh: 'Displej je prasklý jen v rohu, telefon jinak normálně funguje.' },
  { id: 'svacina',   pribeh: 'Ráno nebyl čas na snídani a dneska máš osm hodin.' },
  { id: 'svacina',   pribeh: 'Svačinu z domu máš v batohu, ale v bufetu mají nové wrapy.' },
  { id: 'kino',      pribeh: 'Celá parta jde slavit narozeniny tvého nejlepšího kamaráda.' },
  { id: 'energetak', pribeh: 'Je to už třetí tento týden.' },
  { id: 'jizdenka',  pribeh: 'Do školy to máš deset minut pěšky.' },
  { id: 'mikina',    pribeh: 'Je zima a jedinou teplou mikinu máš roztrženou.' },
];
