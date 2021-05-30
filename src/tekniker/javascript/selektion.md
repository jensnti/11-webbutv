---
title: Selektion
eleventyNavigation:
    key: selektion
    parent: javascript
    order: 4
    excerpt:
---
{% intro %}

## Introduktion
Ett program behöver kunna göra val. Selektion är kodstruktur som testar om 
uttryck är sant eller falskt.
Ett vanligt sätt att utföra det är ```if``` satsen.
```javascript
if (...) {
    // om sant
} else {
    // annars falskt
}
```

### Tänk på
 - Du måste inte använda dig av ```else```
 - För att skriva flera uttryck använder du ```else if (...)```
 - Om det första uttrycket är sant, körs inte något av de andra

{% endintro %}

{% instruktioner %}

## Instruktioner

Öppna utvecklarverktygen i din webbläsare och koda där.

```javascript
let a = 12;
let b = 24;
if (a === b) {
    console.log('Tror du att den här koden kommer köras?');
} else {
    console.log('Eller den här?');
}

let name = "Mitt namn";
if (name) {
    console.log(`Hej på dig ${name}`);
}
```

Öppna ett HTML-dokument, koda i ett ```<script>``` element.

```javascript
let number = 7;
let guess = prompt('Kan du gissa på det hemliga numret?');

if (number == guess) {
    alert('Otroligt, du gissade rätt!');
} else {
    // Du gissade fel
}
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Koda i konsollen.

#### Uppgift 2

Koda i ett dokument.

### ⭐⭐

{% extra %}

#### Uppgift 3

Koda i dokument.
Använd ```else if (guess > number)``` för att skriva
ut om gissningen var för stor. Hur skriver du med ```else if (...)```
att gissningen var för liten?

{% endextra %}

{% enduppgifter %}
