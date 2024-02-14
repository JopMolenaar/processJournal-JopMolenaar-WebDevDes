# Fenna

topic: toegankelijkheid


bedrijfsleven mist nog veel toegankelijkheid

## focus state voor keyboard gebruikers
:focus-visible

beste is om elk element apaert te doen

## aria attributen

aria-label voor images, of button met en icon, logo in de nav
aria-controls, bedienings elementen te koppelen aan het element dat het controleert, button link of tab
aria-expanded, of het menu uitgeklapt is of niet
aria-live, vertelt de screen reader wat de dynamische veranderingen zijn op de website, 
- off
- polite
- assertive => vrij agressief

aria-atomic, true => ik wil dat deze hele groep opniew wordt geannounced

role=""
aria-role-description=""
aria-labelledby, geef de id mee
aria-label, inhoud 

slide sl

Aria hidden=“”
List items neemt ie dus niet mee 

Gebruik geen li elements voor slides


Carousel controls:
Role=“group 
Aria label
Aria disabled=“true”

Focus guards om binnen de modal te blijven tabben 

Kleur contrasten 
1/21
Zwart op wit is 21:1

Lighthouse-audit om contrast te testen

Lettergrootte is ook belangrijk
Minimaal 16px

Regellengte van 50 tot 75 tekens
Ch unit in css : 1ch is de breedte van de 0 

Alt text 
Correcte semantiek 
Nav, h1 tot en met h6, button of a

Wat kan je nog meer doen:
Skip to content button
Prefers reduce motion
Autoplay moeten gepauzeerd kunnen worden
Zelf een screen reader gebruiken

Wat zei gebruikt:
Next.js
Emotion CSS library
Sanity