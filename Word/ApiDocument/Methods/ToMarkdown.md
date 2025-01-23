# ToMarkdown

Converts a document to Markdown.

## Syntax

expression.ToMarkdown(bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bHtmlHeadings | Optional | boolean | false | Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs. |
| bBase64img | Optional | boolean | false | Defines if the images will be created in the base64 format. |
| bDemoteHeadings | Optional | boolean | false | Defines if all heading levels in your document will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body. |
| bRenderHTMLTags | Optional | boolean | false | Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket in the following way: \&lt;tag&gt;text\&lt;/tag&gt;. By default, the opening angle brackets will be replaced with the special characters. |

## Returns

string

## Example

This example converts a document to Markdown.

```javascript
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Heading 1");
let heading1Style = doc.GetStyle("Heading 1");
paragraph1.SetStyle(heading1Style);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This document will be converted to Markdown.");
doc.Push(paragraph2);
let search = paragraph2.Search("Markdown");
search[0].SetBold(true);
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Heading 2");
doc.Push(paragraph3);
let heading2Style = doc.GetStyle("Heading 2");
paragraph3.SetStyle(heading2Style);
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("There is an example of two heading levels.");
doc.Push(paragraph4);
let markdown = doc.ToMarkdown(false, false, true, false);
let paragraph5 = Api.CreateParagraph();
paragraph5.AddLineBreak();
paragraph5.AddText("Markdown").SetBold(true);
paragraph5.AddLineBreak();
paragraph5.AddText(markdown);
doc.Push(paragraph5);
```
