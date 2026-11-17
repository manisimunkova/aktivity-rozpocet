// Příspěvky pro aktivitu „FOMO feed“.
// Všechny účty a obchody jsou vymyšlené. Texty a ceny můžeš libovolně upravit.
//
// Pole příspěvku:
//   ucet     – jméno účtu
//   avatar   – emoji v kolečku
//   stitek   – „Sponzorováno“, „Placené partnerství“, nebo vynech (běžný příspěvek)
//   ikona    – velké emoji v obrázku
//   barvy    – dvě barvy přechodu v obrázku
//   nadpis   – text přes obrázek (volitelné)
//   text     – popisek pod obrázkem
//   cena     – cena v Kč; když chybí, příspěvek nejde koupit (např. fotka psa)
//   puvodni  – volitelně „původní“ přeškrtnutá cena
//   odpocet  – volitelně: odpočet v sekundách (po skončení se spustí znovu)
//   zbyva    – volitelně: „zbývají poslední N kusy“
//   tlacitko – volitelně: vlastní text tlačítka (výchozí „Koupit“)
//   trik     – název triku (ukáže se až ve výsledcích)
//   vysvetleni – jak trik funguje (ukáže se až ve výsledcích)

window.KAPESNE = 800; // měsíční kapesné pro srovnání ve výsledcích (Kč)

window.PRISPEVKY = [
  {
    ucet: 'lucie.styl', avatar: '💜', stitek: 'Placené partnerství',
    ikona: '🧥', barvy: ['#f7c6e0', '#b9a3f0'], nadpis: 'Moje nejoblíbenější mikina',
    text: 'Nosím ji úplně každý den 😍 S mým kódem LUCIE15 máš −15 %!',
    cena: 899, puvodni: 1059,
    trik: 'Doporučení od influencera',
    vysvetleni: 'Influencer za příspěvek často dostává zaplaceno nebo dostane podíl z každého nákupu přes svůj kód. Hledej štítek „Placené partnerství“.',
  },
  {
    ucet: 'adam_k', avatar: '🐶',
    ikona: '🐕', barvy: ['#ffe2a8', '#ffb98a'],
    text: 'Konečně máme psa!! Seznamte se, tohle je Rex 🐾',
  },
  {
    ucet: 'SneakerDrop', avatar: '👟', stitek: 'Sponzorováno',
    ikona: '👟', barvy: ['#1c1c1e', '#4a2a6a'], nadpis: 'LIMITOVANÁ EDICE',
    text: 'Ve tvé velikosti zbývají poslední kusy. Až budou pryč, už se nevrátí!',
    cena: 2490, zbyva: 3,
    trik: 'Nedostatek („poslední kusy“)',
    vysvetleni: 'Když něčeho zbývá málo, máme pocit, že to musíme mít hned. Často to ale není pravda a zboží se brzy doplní.',
  },
  {
    ucet: 'GameZone', avatar: '🕹️', stitek: 'Sponzorováno',
    ikona: '🎮', barvy: ['#3a0ca3', '#4cc9f0'], nadpis: 'Bitevní pas – sezóna 7',
    text: 'Exkluzivní odměny jen pro ty, kdo to stihnou!',
    cena: 249, odpocet: 120,
    trik: 'Odpočet času',
    vysvetleni: 'Odpočet tě nutí rozhodnout se hned, bez přemýšlení. Často se po skončení spustí znovu – všiml/a sis, že v tomhle feedu taky?',
  },
  {
    ucet: 'tom_a_parta', avatar: '🎸',
    ikona: '🎤', barvy: ['#ff5f6d', '#ffc371'], nadpis: 'Sobota! 🔥',
    text: 'Jdeme celá parta na koncert. Jdeš taky? Lístky jsou skoro vyprodané!',
    cena: 890, tlacitko: 'Koupit lístek',
    trik: 'Strach, že o něco přijdeš (FOMO)',
    vysvetleni: 'Když jdou všichni, je těžké říct ne. Je v pořádku jít – ale jen když to opravdu chceš a máš na to peníze, ne kvůli strachu, že o něco přijdeš.',
  },
  {
    ucet: 'TechStore', avatar: '🔌', stitek: 'Sponzorováno',
    ikona: '🎧', barvy: ['#c3f0ca', '#7bd389'], nadpis: 'MEGA SLEVA −63 %',
    text: 'Bezdrátová sluchátka za nejnižší cenu v historii!',
    cena: 1490, puvodni: 3990,
    trik: 'Sleva z nafouknuté ceny',
    vysvetleni: 'Původní cena bývá přikrášlená, aby sleva vypadala obrovská. Zkontroluj, za kolik se věc prodává jinde.',
  },
  {
    ucet: 'ema.kresli', avatar: '🎨',
    ikona: '🌅', barvy: ['#fbd786', '#f7797d'],
    text: 'Dnešní západ slunce z kopce za školou 🧡',
  },
  {
    ucet: 'GlowBox', avatar: '✨', stitek: 'Sponzorováno',
    ikona: '💄', barvy: ['#fde2f3', '#e8a0bf'], nadpis: 'Dnes zaplatíš 0 Kč',
    text: 'Kup teď, zaplať za 30 dní. Celý balíček kosmetiky až domů!',
    cena: 1190,
    trik: 'Kup teď, zaplať později',
    vysvetleni: 'Odložená platba vypadá jako zadarmo. Zaplatit ale musíš – a když nestihneš termín, často se platí poplatek navíc.',
  },
  {
    ucet: 'BOOM Energy', avatar: '⚡', stitek: 'Sponzorováno',
    ikona: '🥤', barvy: ['#f9d423', '#ff4e50'], nadpis: '4 + 1 ZDARMA',
    text: 'Nová příchuť Mango Rush. Kup čtyři a pátou máš zdarma!',
    cena: 196,
    trik: 'Množstevní akce',
    vysvetleni: 'Akce „kup víc, ušetři“ tě přiměje koupit víc, než jsi chtěl/a. Ušetříš jen tehdy, když bys to stejně všechno koupil/a.',
  },
  {
    ucet: 'CaseShop', avatar: '📱', stitek: 'Sponzorováno',
    ikona: '📦', barvy: ['#a1c4fd', '#c2e9fb'], nadpis: 'Doprava zdarma nad 500 Kč',
    text: 'V košíku máš kryt na mobil za 420 Kč. Přidej samolepky a doprava je zdarma!',
    cena: 120, tlacitko: 'Přidat samolepky',
    trik: 'Doprava zdarma nad limit',
    vysvetleni: 'Abys ušetřil/a 89 Kč za dopravu, utratíš 120 Kč za věc, kterou jsi vůbec nechtěl/a. Vydělal hlavně obchod.',
  },
];
