---
title: Element
eleventyNavigation:
    key: element
    parent: html
    order: 1
    excerpt: Element är en del av en webbsida
---
{% intro %}

## Introduktion
HTML består av element. Element märks upp med taggar som berättar för webbläsaren
vilken sorts innehåll det är.

Ett HTML element har tre delar. En öppningstag ```<p>``` innehåll och en stängnings tag ```</p>```.

Ett HTML element kan innehålla andra element, det kallas för nästlade element.

### Tänk på
 - Börja alltid med HTML grundstrukturen
 - HTML är otroligt robust, det låter dig göra fel
 - Öppna och stänga alla taggar du använder
 - Element som har en radbrytning efter sig kallas för **block** element
{% endintro %}

{% instruktioner %}

## Instruktioner
Skapa ett nytt dokument, element.html.

```html
<h1>Detta är en rubrik, med rubriknivå 1</h1>
<p>Detta är en paragraf med text.</p>
<p>Alla dessa element har en efterföljande radbrytning.</p>
<h2>Detta är en rubrik med nivå 2</h2>
<p>Notera öppningstaggarna och stängningstaggarna. Stängningen indikeras med ett snedsträck(slash).</p>
<p>Du kan nästla element, <strong>det är en väldigt viktig princip</strong> för att skapa webbsidor.</p>
<p>Det finns ett 140 tal olika taggar, leta reda på någon och prova!</p>
```

Fortsätt redigera i dokumentet.

```html
<p>Prova att skapa en punktlista.</p>
<p>Unordered list heter elementet för en oordnad punktlista.</p>
<ul>
    <li>Detta är ett list item</li>
    <li>Varje li tagg nästlat i ul taggen ger oss ett nytt element</li>
</ul>
```
{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1
Skapa element.html

#### Uppgift 2
Skapa listan.

### ⭐⭐
{% extra %}

#### Uppgift 3
Testa att skapa en ordnad lista i dokumentet, [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol).
{% endextra %}
{% enduppgifter %}