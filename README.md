# Aktivity k workshopu o osobním rozpočtu (Nekrachni)

Interaktivní aktivity pro 8. a 9. třídu k workshopu „Osobní rozpočet“ (90 minut).
Jsou to obyčejné webové stránky bez instalace a bez ukládání dat: co dítě vyplní,
vidí jen ono na svém displeji a nikam se to neposílá.

| Aktivita | Složka | Délka | Část workshopu |
|---|---|---|---|
| Nutné, nebo navíc? (swipe hra) | `swipe/` | 7–10 min | Výdaje |
| FOMO feed | `fomo/` | 8–15 min | Výdaje, FOMO |
| Měsíc s kapesným | `kapesne/` | 10–20 min | Jak na budget |
| Kolik hodin brigády to stojí? | `hodiny/` | 5–10 min | Finanční cíle |

Web: https://manisimunkova.github.io/aktivity-rozpocet/

Texty, ceny a události každé aktivity jsou v jednom souboru `.js` v její složce
(`swipe/karty.js`, `fomo/prispevky.js`, `kapesne/udalosti.js`, `hodiny/veci.js`).
Na začátku každého souboru je návod, co které pole znamená.

## Nutné, nebo navíc?

1. **Kolo 1:** 15 věcí bez kontextu. Doleva = navíc, doprava = nutné.
2. **Kolo 2:** některé věci znovu, ale s krátkým příběhem (např. „Staré tenisky ti
   protékají“ × „Tyhle nové má půlka třídy“).
3. **Výsledky:** kolik peněz šlo na nutné a kolik na věci navíc a u kterých věcí
   příběh změnil odpověď.

**Do diskuse se třídou:** „Kdo dal tenisky doprava? A kdo je v druhém kole přehodil?“
Pointa: jestli je věc nutná, často nezáleží na věci, ale na situaci.

**Ovládání:** tah prstem nebo myší, tlačítka dole, šipky ← → na klávesnici.
„↶ Vrátit poslední kartu“ opraví omylem odtaženou kartu.

## FOMO feed

Feed jako na sociální síti: 10 příspěvků, z toho 8 reklam a 2 běžné příspěvky kamarádů.
U reklam dítě volí **Koupit** / **Nechci**. Každá reklama skrývá jeden trik: influencer,
poslední kusy, odpočet času (po skončení se spustí znovu), tlak kamarádů, nafouknutá sleva,
„kup teď, zaplať později“, množstevní akce, doprava zdarma nad limit.
Ve výsledku: kolik by utratilo (i v poměru ke kapesnému), které triky zabraly a s vysvětlením,
které ne. Pointa: pravidlo 24 hodin.

**Do diskuse:** Který trik je nejzáludnější? Kde jste ho viděli doopravdy?

## Měsíc s kapesným

Dítě má 800 Kč kapesného a vybere si cíl, na který spoří (chybí mu 500 Kč). Hned na začátku
rozhodne, kolik dá do prasátka, a pak projde 4 týdny s 8 situacemi (bubble tea, skin,
dárek, prasklý obal, peníze od babičky, povinný výlet, drogerie, kino). Když v peněžence
nestačí, doplácí se z prasátka. Ve výsledku: jestli na cíl dosáhlo, kam šly peníze
po kategoriích a ponaučení podle toho, jak hrálo (rezerva / „zaplať nejdřív sobě“).

**Do diskuse:** Která situace byla nejtěžší? Kdo cíl splnil a jak?

## Kolik hodin brigády to stojí?

Posuvník hodinové mzdy (výchozí 135 Kč, minimální mzda 2026 je 134,40 Kč/h), dlaždice
s věcmi a jejich cenou v hodinách práce, vlastní položka. Dole souhrn seznamu přání
v hodinách a počtu brigád po 4 hodinách. Navazuje na slajd „Kolik hodin mojí práce stojí
letenka do Lisabonu?“.

### Jak upravit karty a texty

Například karty swipe hry jsou v souboru [`swipe/karty.js`](swipe/karty.js).
Na GitHubu ho otevři, klikni na tužku (Edit), uprav text mezi apostrofy
a dole klikni na **Commit changes**. Za minutu až dvě se změna objeví na webu.
Návod k jednotlivým polím je přímo na začátku souboru.
