---
title: Vad är HTML?
eleventyNavigation:
    key: vad är html?
    parent: html
    order: 0
    excerpt: Hypertext Markup Language, webbens språk
---

{% intro %}

## Introduktion
Hypertext Markup Language(HTML) är ett märkspråk som används för att märka upp webbsidor.
HTML ger strukturen och betydelsen så att en webbläsare kan tolka webbsidan och rita den.


HTML är en standard som styrs av [World Wide Web Consortium](https://www.w3.org/).

### Tänk på
 - Filändelsen för HTML dokument är .html
 - Döp din webbplats startsida till index.html
 - Använd små bokstäver, undvik specialtecken ```()@'"&%/&åäö``` och mellanslag i filnamnet
 - Använd en [IDE](https://sv.wikipedia.org/wiki/Integrerad_utvecklingsmilj%C3%B6) som [Visual Studio Code](https://code.visualstudio.com/) för att skapa dina dokument

{% endintro %}

{% instruktioner %}

## Instruktioner
Skapa ett fil, index.html, med följande innehåll. Det här är ett exempel på en korrekt HTML grundstruktur.
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mitt första HTML dokument</title>
</head>
<body>
    <h1>Hej världen!</h1>
    <p>Detta är mitt första HTML dokument.</p>
</body>
</html>
```

Redigera filen, byt språk och titel.
``` html
<html lang="sv"> <!-- anger att sidans språk är svenska -->
<head> <!-- head taggen innehåller meta information till webbläsaren -->
    <title>Detta är sidans titel som visas i fliken i webbläsaren</title>
</head>
<body>
    <!-- de här taggarna är kommentarer och syns inte alls på sidan -->
    <h1>I sidans body finns det innehåll som faktiskt syns på webbsidan</h1>
</body>
```
{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Skapa index.html

#### Uppgift 2

Redigera index.html

{% enduppgifter %}