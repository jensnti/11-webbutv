---
title: Vad är CSS?
eleventyNavigation:
    key: vad är css?
    parent: css
    order: 0
    excerpt: Cascading Style Sheets, språket som presenterar din HTML 
---
{% intro %}

## Introduktion
Cascading Style Sheets(CSS) är ett kompletterande språk till HTML som används för 
att ge innehåll stil och layout. CSS kan användas för att byta färger, sätta marginaler
och dela upp ditt innehåll.

### Tänk på
 - Filändelsen för CSS är .css 
 - CSS kan skrivas inline(i ett HTML dokument) eller i ett eget dokument
 - CSS skrivs med regler
 - En regel har en selektor(selector) för att välja vilka(et) element som ska påverkas
 - Det är viktigt att öppna och stänga dina regler, det görs med ```{ ... }```

{% endintro %}

{% instruktioner %}

## Instruktioner
Öppna ett tidigare HTML dokument. Skriv inline CSS med ```<style>```.
```html
<style>
    h1 {
        color: red;
    }
    p {
        color: green;
    }
</style>
```

Kopiera koden till ett eget dokument, döp det till style.css.
```css
    h1 {
        color: red;
    }
    p {
        color: green;
    }
```

Skapa sedan en länk till stildokumentet från din HTML fil.
```html
<link rel="stylesheet" href="style.css">
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Redigera dokument och skriv CSS.

#### Uppgift 2

Skapa ett separat CSS-dokument och redigera HTML dokumentet.

{% enduppgifter %}