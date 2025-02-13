# ConvertDocument

Converts a document to Markdown or HTML text.

## Syntax

```javascript
expression.ConvertDocument(convertType, htmlHeadings, base64img, demoteHeadings, renderHTMLTags);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| convertType | Optional | "markdown" | "html" | "markdown" | Conversion type. |
| htmlHeadings | Optional | boolean | false | Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs. |
| base64img | Optional | boolean | false | Defines if the images will be created in the base64 format. |
| demoteHeadings | Optional | boolean | false | Defines if all heading levels in your document will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body. |
| renderHTMLTags | Optional | boolean | false | Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket in the following way: \&lt;tag&gt;text\&lt;/tag&gt;. By default, the opening angle brackets will be replaced with the special characters. |

## Returns

string

## Example

This example shows how to gets your document as Markdown and paste the result into the document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Heading 1");
paragraph.SetStyle(doc.GetStyle("Heading 1"));

paragraph = Api.CreateParagraph();
paragraph.AddText("This document will be converted to Markdown.");
doc.Push(paragraph);
paragraph.Search("Markdown")[0].SetBold(true);

paragraph = Api.CreateParagraph();
paragraph.AddText("Heading 2");
doc.Push(paragraph);
paragraph.SetStyle(doc.GetStyle("Heading 2"));

paragraph = Api.CreateParagraph();
paragraph.AddText("There is an example of two heading levels.");
doc.Push(paragraph);

let md = Api.ConvertDocument("markdown", false, false, true, false);
paragraph = Api.CreateParagraph();
paragraph.AddLineBreak();
paragraph.AddText("Markdown").SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText(md);
doc.Push(paragraph);
```
