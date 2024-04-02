---
outline: deep
cSpell: locale de
---

# Markdown

Markdown ist eine einfach Textauszeichnungssprache um formatierten Text und strukturierte Dokumente zu erstellen. **arma.events** unterstützt Markdown zur Strukturierung der Event-Texte. Die Benutzung von Markdown ist vollständig optional. Du kannst einfach deine Texte schreiben und sie durch Erstellung separater Textboxen mit Überschriften strukturieren, ohne dabei Markdown zu verwenden. Wenn du beabsichtigst Markdown zu verwenden, dann sieh dir die folgende Liste unterstützter Textauszeichnungen an.

![Markdown vs. Kein Markdown](../images/markdown/markdown-vs-no-markdown.png "Markdown vs. Kein Markdown")

## Absätze und Zeilenumbrüche

Jedes Return in deinem Text erzeugt einen manuellen Zeilenumbruch. Jede leere Zeile erzeugt einen neuen Absatz.

![Absätze und Zeilenumbrüche](../images/markdown/paragraphs-and-line-breaks.png "Absätze und Zeilenumbrüche")

## Überschriften

Mit der #-basierenden Schreibweise kannst du bis zu 4 Abstufungen für Überschriften erzeugen. Mit `=====` und `-----` lassen sich nur 2 Abstufungen erzeugen.

![Überschriften](../images/markdown/headlines.png "Überschriften")

![Überschriften - Alternative Schreibweise](../images/markdown/alt-headlines.png "Überschriften - Alternative Schreibweise")

## Textauszeichnungen

\**kursiv*\* or \kursiv\_ (Alternative Schreibweise)

\*\***fett**\*\* or \_\___fett__\_\_ (Alternative Schreibweise)

\*\*\****fett kursiv***\*\*\* oder \_\_\____fett kursiv___\_\_\_ (Alternative Schreibweise)

\``Nichtproportional`\`

\~\~~~durchgestrichen~~\~\~

![Textauszeichnungen](../images/markdown/text-attributes.png "Textauszeichnungen")

![Textauszeichnungen - Alternative  Schreibweise](../images/markdown/alt-text-attributes.png "Textauszeichnungen - Alternative Schreibweise")

## Horizontale Linie

Mit drei Strichen `---` kannst du eine horizontale Linie erzeugen. Um Formatierungsprobleme zu vermeiden, setze eine Leerzeile über und unter der horizontalen Linie.

![Horizontale Linie](../images/markdown/horizontal-rule.png "Horizontale Linie")

## Unsortierte Listen

Füge zwei Leerzeichen vor deinem Listenelement ein um es einzurücken. Du kannst  `-`,`+` oder `*` als Listensymbol verwenden.

![Unsortierte Listen](../images/markdown/unsorted-lists.png "Unsortierte Listen")

![Unsortierte Listen - Alternative Schreibweise 1](../images/markdown/alt-unsorted-lists.png "Unsortierte Listen - Alternative Schreibweise 1")

![Unsortierte Listen - Alternative Schreibweise 2](../images/markdown/alt2-unsorted-lists.png "Unsortierte Listen - Alternative Schreibweise 2")

## Sortierte Listen

Füge zwei Leerzeichen vor deinem Listenelement ein um es einzurücken.

![Sortierte Listen](../images/markdown/sorted-lists.png "Sortierte Listen")

## Links

Format `[VERLINKTER TEXT] (URL "MOUSEOVER-TEXT")`

![Links](../images/markdown/links.png "Links")

## Bilder

Format `![ALTERNATIVER TEXT] (URL "MOUSEOVER-TEXT")`

![Bilder](../images/markdown/images.png "Bilder")

## Autolinks and E-Mail-Adressen

Umschließe deine URL or E-Mail-Adresse mit `<` und `>` um einen automatischen Link mit dem URI als Link-Text zu erzeugen.

![Autolinks](../images/markdown/autolinks.png "Autolinks")

## Code-Block

Beginne jede Zeile mit ` ` 4 Leerzeichen um einen Code-Block zu erzeugen. Alternativ umschließe den Text mit ` ``` ` um einen Code-Block zu erzeugen. Syntax-Highlighting wird nicht unterstützt.

![Code-Block](../images/markdown/code-block.png "Code-Block")

![Code-Block Alternative](../images/markdown/alt-code-block.png "Code-Block Alternative")

## Zitat-Block

Beginne jede Zeile or deinen Absatz mit `>` und einem ` ` Leerzeichen um einen Zitat-Block zu erstellen.

![Zitat-Block](../images/markdown/blockquote.png "Zitat-Block")

## Warnungen

Markdown Warnungen werden wie Zitat-Blöcke erzeugt, jedoch enthält die erste Zeile ein Schlüsselwort wie `[!NOTE]` oder `[!WARNING]`.

![Warnungen 1](../images/markdown/alerts-1.png "Warnungen 1")

![Warnungen 2](../images/markdown/alerts-2.png "Warnungen 2")

![Warnungen 3](../images/markdown/alerts-3.png "Warnungen 3")

## Markdown Zeichen maskieren

Wenn du Markdown Zeichen wie normalen Text behandelt wissen möchtest dann musst du diese Zeichen mit dem `\` Prefix maskieren.

![Maskierung](../images/markdown/escaping.png "Maskierung")
