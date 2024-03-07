# Markdown

Markdown is a plain text lightweight markup language for creating formatted text and structured documents. **arma.events** supports Markdown for structuring your event texts. Using Markdown is completely optional. You can simply write your texts and structure them by creating separate text boxes with headlines and without using Markdown at all. If you intend to use Markdown see the list of the supported text markups below.

![Markdown vs. No Markdown](../images/markdown-vs-no-markdown.png "Markdown vs. No Markdown")

## Paragraphs and Line Breaks

Each return in your text will create a line manual break. Each blank line will create a new paragraph.

![Paragraphs and Line Breaks](../images/paragraphs-and-line-breaks.png "Paragraphs and Line Breaks")

## Heading

With the #-based syntax you can create up to 4 headline hierarchies. With `=====` and `-----` you can create only 2 hierarchies.

![Headlines](../images/headlines.png "Headlines")

![Headlines - Alternative Syntax](../images/alt-headlines.png "Headlines - Alternative Syntax")

## Text Attributes

\**italic*\* or \__italic_\_ (Alternative Syntax)

\*\***bold**\*\* or \_\___bold__\_\_ (Alternative Syntax)

\*\*\****bold italic***\*\*\* or \_\_\____bold italic___\_\_\_ (Alternative Syntax)

\``monospaced`\`

\~\~~~strikethrough~~\~\~

![Text Attributes](../images/text-attributes.png "Text Attributes")

![Text Attributes - Alternative  Syntax](../images/alt-text-attributes.png "Text Attributes - Alternative Syntax")

## Horizontal Rule

With three dashes `---` you can create a horizontal line. Keep a blank line before and after to prevent formatting issues.

![Horizontal Rule](../images/horizontal-rule.png "Horizontal Rule")

## Unsorted Lists

Add two blank spaces in front of your list item for intendation. You can use `-`,`+` or `*` as list sign.

![Unsorted Lists](../images/unsorted-lists.png "Unsorted Lists")

![Unsorted Lists - Alternative Syntax 1](../images/alt-unsorted-lists.png "Unsorted Lists - Alternative Syntax 1")

![Unsorted Lists - Alternative Syntax 2](../images/alt2-unsorted-lists.png "Unsorted Lists - Alternative Syntax 2")

## Sorted Lists

Add two blank spaces in front of your list item for intendation.

![Sorted Lists](../images/sorted-lists.png "Sorted Lists")

## Links

Format `[LINKED TEXT] (URL "MOUSEOVER TEXT")`

![Links](../images/links.png "Links")

## Images

Format `![ALTERNATIVE TEXT] (URL "MOUSEOVER TEXT")`

![Images](../images/images.png "Images")

## Autolinks and Email Addresses

Enclose your URL or email address in `<` and `>` to create an automatic link with the URI as the link text.

![Autolinks](../images/autolinks.png "Autolinks")

## Code Block (monospaced text)

Beginn every line with ` ` 4 blank spaces to create a code block. Alternatively, enclose the text in ` ``` ` to create a code block. No support for syntax highlighting.

![Code Block](../images/code-block.png "Code Block")

![Code Block Alternative](../images/alt-code-block.png "Code Block Alternative")

## Blockquote

Beginn every line with `>` and a ` ` blank space to create a blockquote.

![Blockquote](../images/blockquote.png "Blockquote")

## Alerts

Markdown alerts are created like blockquotes but the first line contains a keyword like `[!NOTE]` or `[!WARNING]`.

![Alerts 1](../images/alerts-1.png "Alerts 1")

![Alerts 2](../images/alerts-2.png "Alerts 2")

![Alerts 3](../images/alerts-3.png "Alerts 3")

## Escaping Markdown characters

If you want to treat Markdown characters as normal text then you can escape these characters with the `\` prefix.

![Escaping](../images/escaping.png "Escaping")
