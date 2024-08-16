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
| bRenderHTMLTags | Optional | boolean | false | Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket in the following way: \<tag&gt;text\</tag&gt;. By default, the opening angle brackets will be replaced with the special characters. |

## Returns

string

## Example

This example converts a document to Markdown.

```javascript
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("Heading 1");
var oHeading1Style = oDocument.GetStyle("Heading 1");
oParagraph1.SetStyle(oHeading1Style);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This document will be converted to Markdown.");
oDocument.Push(oParagraph2);
var aSearch = oParagraph2.Search("Markdown");
aSearch[0].SetBold(true);
var oParagraph3 = Api.CreateParagraph();
oParagraph3.AddText("Heading 2");
oDocument.Push(oParagraph3);
var oHeading2Style = oDocument.GetStyle("Heading 2");
oParagraph3.SetStyle(oHeading2Style);
var oParagraph4 = Api.CreateParagraph();
oParagraph4.AddText("There is an example of two heading levels.");
oDocument.Push(oParagraph4);
var sMarkdown = oDocument.ToMarkdown(false, false, true, false);
var oParagraph5 = Api.CreateParagraph();
oParagraph5.AddLineBreak();
oParagraph5.AddText("Markdown").SetBold(true);
oParagraph5.AddLineBreak();
oParagraph5.AddText(sMarkdown);
oDocument.Push(oParagraph5);
```
