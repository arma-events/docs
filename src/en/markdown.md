---
outline: deep
---

# Markdown

Markdown is a plain text lightweight markup language for creating formatted text and structured documents. **arma.events** supports Markdown for structuring your event texts. Using Markdown is completely optional. You can simply write your texts and structure them by creating separate text boxes with headlines and without using Markdown at all. If you intend to use Markdown see the list of the supported text markups below.

![Markdown vs. No Markdown](../images/markdown/markdown-vs-no-markdown.webp "Markdown vs. No Markdown")

## Paragraphs and Line Breaks

Each return in your text will create a manual line break. Each blank line will create a new paragraph.

![Paragraphs and Line Breaks](../images/markdown/paragraphs-and-line-breaks.webp "Paragraphs and Line Breaks")

## Heading

With the #-based syntax you can create up to 4 headline hierarchies. With `=====` and `-----` you can create only 2 hierarchies.

![Headlines](../images/markdown/headlines.webp "Headlines")

![Headlines - Alternative Syntax](../images/markdown/alt-headlines.webp "Headlines - Alternative Syntax")

## Text Attributes

\**italic*\* or \__italic_\_ (Alternative Syntax)

\*\***bold**\*\* or \_\___bold__\_\_ (Alternative Syntax)

\*\*\****bold italic***\*\*\* or \_\_\____bold italic___\_\_\_ (Alternative Syntax)

\``monospaced`\`

\~\~~~strikethrough~~\~\~

![Text Attributes](../images/markdown/text-attributes.webp "Text Attributes")

![Text Attributes - Alternative Syntax](../images/markdown/alt-text-attributes.webp "Text Attributes - Alternative Syntax")

## Horizontal Rule

With three dashes `---` you can create a horizontal line. Keep a blank line before and after to prevent formatting issues.

![Horizontal Rule](../images/markdown/horizontal-rule.webp "Horizontal Rule")

## Unsorted Lists

Add two blank spaces in front of your list item for intendation. You can use `-`,`+` or `*` as a list sign.

![Unsorted Lists](../images/markdown/unsorted-lists.webp "Unsorted Lists")

![Unsorted Lists - Alternative Syntax 1](../images/markdown/alt-unsorted-lists.webp "Unsorted Lists - Alternative Syntax 1")

![Unsorted Lists - Alternative Syntax 2](../images/markdown/alt2-unsorted-lists.webp "Unsorted Lists - Alternative Syntax 2")

## Sorted Lists

Add two blank spaces in front of your list item for intendation.

![Sorted Lists](../images/markdown/sorted-lists.webp "Sorted Lists")

## Links

Format `[LINKED TEXT](URL "MOUSEOVER TEXT")`

![Links](../images/markdown/links.webp "Links")

## Images

Format `![ALTERNATIVE TEXT](URL "MOUSEOVER TEXT")`

![Images](../images/markdown/images.webp "Images")

## Autolinks and Email Addresses

Enclose your URL or email address in `<` and `>` to create an automatic link with the URI as the link text.

![Autolinks](../images/markdown/autolinks.webp "Autolinks")

## Code Block

Begin every line with ` ` 4 blank spaces to create a code block. Alternatively, enclose the text in ` ``` ` to create a code block. No support for syntax highlighting.

![Code Block](../images/markdown/code-block.webp "Code Block")

![Code Block Alternative](../images/markdown/alt-code-block.webp "Code Block Alternative")

## Blockquote

Begin every line or your paragraph with `>` and a ` ` blank space to create a blockquote.

![Blockquote](../images/markdown/blockquote.webp "Blockquote")

## Alerts

Markdown alerts are created like blockquotes but the first line contains a keyword like `[!NOTE]` or `[!WARNING]`.

![Alerts 1](../images/markdown/alerts-1.webp "Alerts 1")

![Alerts 2](../images/markdown/alerts-2.webp "Alerts 2")

![Alerts 3](../images/markdown/alerts-3.webp "Alerts 3")

## Escape Markdown Characters

If you want to treat Markdown characters as normal text then you can escape these characters with the `\` prefix.

![Escaping](../images/markdown/escaping.webp "Escaping")
