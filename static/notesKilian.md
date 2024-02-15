# Weekly Nerd => Kilian Valkhof

7 Februari 2024

## Samenvatting van de lezing

Kilian Valkhof is de oprichter van polypane en is lid van het electron governance team dat Frameworks bouwt voor browsers. 

Hij zei in de lezing dat je bij het bouwen van website de "rule of least power" moet gebruiken. Dit houdt in dat je de programmeer taal kiest die het minst kan maar voldoene is voor je doel. Voor een normale webpagina gebruik je dus eerst html, daarna css, en dan pas Javascript. Zo heb je de meeste kans dat je website overal kan worden gebruikt en minder snel stuk gaat onder bepaalde omstandigheden.

Een voorbeeld dat hij hierbij gaf was dat als je door en tunnel rijdt en het internet slecht is, dat je Javascript pagina dan niet meer beschikbaar is, maar als het alleen html en css was, was het wel beschikbaar.

Ook moet je goed kijken of jouw doel kan worden behaald zonder javascript en libraries. Dit moet namelijk allemaal worden gedownload, en veel browsers hebben al heel veel fucntionaliteiten ingebouwd die het misschien wel aleen met html en css kunnen. 

Ook gaf hij een hele goede tip: 

Als je in de komende jaren iets gaat bouwen dat je al eerder hebt gebouwd, en dat wilt hergebruiken, kijk eerst of er een betere manier is om het te bouwen dan dat je al had. Browser funtionaliteiten gaan namelijk heel snel vooruit en er zou zo maar een mogelijke browser oplossing klaar liggen die je eerst met javascript had gebouwd. 

Daarna ging hij door een lijst met html en css code die voor bepaalde doelen kunnen worden gebruikt die eerst vaak met Javascript werden gemaakt. 

### Custom toggles

Custom toggles worden vaak gebruikt op `form` `img` en andere elementen.
Kan je herkennen aan de `::` na een element, voor de custom toggle.

Hij had het over `::focus-visible` en deze toggle geldt alleen als je geen interactie hebt met de muis, verder wel.

Ook heb je `input::thumb` om het rondje in de switch aan te roepen.
en `input::track` om de achterkant van de switch aan te roepen. 

Ook kwam er een vraag uit het publiek wat het verschil was tussen `appearance: none;` en `all: unset;`. Bij `appearance: none;`  zeg je dat de browser dit element niet hoeft te vervangen en niet de standaard styling wil, waardoor je hem zelf beter kan stylen. 
Met `all: unset;` zeg je dat je helemaal geen styling wilt en is minder agressief.

### Datalist

Met het datalist element in html maak je een automatic complete field. Dit hoef je dus niet meer met Javascript te schrijven.

```md
<datalist> 
    <options></options>
    <options></options>
    <options></options>
</datalist>
```

Je kan hem alleen nog niet stylen. Als je dat echt wilt zul je hem wel moeten maken met javascript. Maar het stylen van dit element zou best wel snel in de toekomst kunnen worden toegev=oegd aan browsers. 

### Color pickers

Hij zei ook wat over color pickers. Met `input-type="color"` op het input element krijg je een heleboel colorpicker functionaliteiten van de browser, en je krijgt zelfs meer dan je zelf kan maken met Javascript.

Ook kan je met `color-scheme: dark;` op de input, het element dark laten stylen door de browsers. 

### In-page transitions

Met In-page transitions vervang je honderden regels js + jquery met 1 regel html en dan heb je ook nog een betere ervaring. 
<!-- wat is die regel html? -->
Maar bij scrollen op de pagina kan t ook met 2 regels js.
<!-- welke twee reges? -->

### Accessibility

Accessibility is heel belangrijk en je zou animaties moeten kunnen uitzetten voor mensen die dat willen. Dit kan met `@media {prefers-reduced-motion:no-preference}`.

Als je links hebt die verwijzen naar een kopje op de zelfde pagina dan springt dat daar zo naar toe. De gebruiker weet dan niet waar ze zijn en hoeveel content ze hebben gemist. 
Met `scroll-behaviour: smooth;` ga je dat tegen en ziet de gebruiker een mooie scroll animatie. Deze moet je dus wel in de `@media {prefers-reduced-motion:no-preference}` zetten. 

Ook heb je `scroll-margin`, dit is een margin tot waar die naar boven scrolled, zo kan je bepalen waar dat gelinkte kopje op je scherm komt als je op die link klikt. 

Als je op de link klikt en je springt naar het gelinkte kopje op de pagina kan je dit een styling geven met `:target`. Dit geeft dan styling weer als dat element getarget wordt. 

### Carousels

scroll-snap api's

adam argyle snap video's

### Accordions and modals

Accordions of ook wel details and summary's genoemd hoef je ook niet met Javascript te maken. 

```md
<details>
  <summary>Titel</summary>
  <p>Text over die titel dat uitklapt als je op de titel klikt.</p>
</details>
```

Met `::marker` kun je de marker naast een list item of het summary element stylen
Met [open] kun je de details en summary een andere styling geven als die open is

Ook is het handig om een de muis een pointer te maken en hover styling toe te voegen op de :hover van een details en summary. Want dit gebeurt niet automatisch

Ook gaf hij als tip dat je de details en summary niet moet dichtmaken als je op een andere klikt. Soms willen mensen vergelijken en dan moet de gebruiker er heel vaak op klikken om zijn/haar doel te behalen. 


### Dialog

blokeert js niet, alert wel

met een form method "dialog" en een knop met submit om de dialog te closen

op die diaog kan je showModal() aanroepen
dialog komt boven alles, komt in de top layer

access de value van de submit button met dialog.returnValue

::backdrop kan je stylen (achter de modal)

### Container queries

werken een soort als media q, ipv hoe breed is mijn vp, hoe breed is mijn component
aan de hand van de container size kan je vertellen hoe de childs zich gedragen

container-type:

50cqw container units

### :has()

parent selector

form has input that is checked, doe dan iets
soort if else

polypane.app/where-is-has/

### Stop using js in the future !!!!!! (features van browsers en css waar nog aan wordt gewerkt)

Hier noemde hij een lijstje van browser functionaliteiten die in weinig browsers al zitten maar wel dit of volgend jaar worden toegevoegd aan veel browsers. 

#### field sizing

input element die mee schaalt met de content

#### mansonry layout

gird maken, vul het maar op

#### selectlist

heeft alle semantics en interactie van een select
maar is gewoon stijlbare html

goede functionaliteit en mooie eigen styling

div met slot="listbox"

:parts, [popover]

#### scroll driven animations

animatie koppelen met een scroll ergens op de pagina

bram.us scroll-driven-animations-cover-flow

### Conclusie

thema, probeer geen js te gebruiken
ipv van js, laat de browser t doen
sneller etc

goeie tip: probeer zelf code te schrijven ipv de hele tijd ai, voor je baan later


## Mijn opinie