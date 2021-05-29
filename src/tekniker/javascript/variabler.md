---
title: Variabler
eleventyNavigation:
    key: variabler
    parent: javascript
    order: 0
---
{% intro %}

## Introduktion
En variabel är en behållare för att spara ett värde. En variabel deklareras med ett namn och tilldelas sedan ett värde.
För att deklarera en variabel i javascipt använder du let, i vissa fall var, följt av namnet.

``` js
let myVar;
```

### Tänk på
 - Ett semikolon indikerar vars raden, eller uttrycket slutar.
 - En variabel kan namnges till nästan vadsomhelst, men det finns vissa [regler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables).
 - En variabels namn är skifteskänsligt(case sensitive).
 - I konsollen kan du se en variabels värde genom att skriva dess namn.
 - I ett dokument så använder du ```console.log(var)``` för att skriva ut värdet till konsollen.

{% endintro %}

{% instruktioner %}

## Instruktioner
Öppna utvecklarverktygen i din webbläsare(F12) och välj console.

``` js
let firstName;
firstName = 'förnamn';
let lastName = 'efternamn';
let name = firstName + lastName; // förnamnefternamn
name = firstName + ' ' + lastName // förnamn efternamn
let age = 00;
let greeting = `Hej ${name}, du är ${age} år gammal`; 
```

Skapa ett nytt html-dokument, koda i ett ```<script>``` element.

``` js
console.log('Välkommen!');
let name = prompt('Vad heter du?');
console.log(`Hej ${name}`);
let birthYear = prompt(`Kan du skriva vilket år du föddes ${name}?`);
alert('Oj ' + name + ', ' + birthYear + ' var länge sedan!');
```
{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Koda i konsollen.

#### Uppgift 2

Skapa ett nytt dokument.

### ⭐⭐

{% extra %}

#### Uppgift 3

Skapa ett nytt dokument.
Skapa inmatning för följande frågor och skriv ut användarens svar.

 - Hur skriver du för att deklarera en variabel i javascript?
 - Vilken metod kan du använda för att skriva ut en variabel?

Skriv ut svaret på fråga ett och två som **ett** meddelande till användaren.

{% endextra %}

{% enduppgifter %}
