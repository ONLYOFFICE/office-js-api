# ToHtml

Converts a document to HTML.

## Syntax

expression.ToHtml(bHtmlHeadings?, bBase64img?, bDemoteHeadings?, bRenderHTMLTags?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bHtmlHeadings | Optional | Boolean | Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs. Default value is "false". |
| bBase64img | Optional | Boolean | Defines if the images will be created in the base64 format. Default value is "false". |
| bDemoteHeadings | Optional | Boolean | Defines if all heading levels in your document will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body. Default value is "false". |
| bRenderHTMLTags | Optional | Boolean | Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket in the following way: <pre><tag>text</tag></pre>. By default, the opening angle brackets will be replaced with the special characters. Default value is "false". |

## Returns

String

## Example

This example converts a document to HTML.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("Heading 1");
var oHeading1Style = oDocument.GetStyle("Heading 1");
oParagraph1.SetStyle(oHeading1Style);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This document will be converted to HTML.");
oDocument.Push(oParagraph2);
var aSearch = oParagraph2.Search("HTML");
aSearch[0].SetBold(true);
var oParagraph3 = Api.CreateParagraph();
oParagraph3.AddText("Heading 2");
oDocument.Push(oParagraph3);
var oHeading2Style = oDocument.GetStyle("Heading 2");
oParagraph3.SetStyle(oHeading2Style);
var oParagraph4 = Api.CreateParagraph();
oParagraph4.AddText("There is an example of two heading levels.");
oDocument.Push(oParagraph4);
var sHtml = Api.ConvertDocument("html", false, false, false, true);
var oParagraph5 = Api.CreateParagraph();
oParagraph5.AddLineBreak();
oParagraph5.AddText("HTML").SetBold(true);
oParagraph5.AddLineBreak();
oParagraph5.AddText(sHtml);
oDocument.Push(oParagraph5);
builder.SaveFile("docx", "ToHtml.docx");
builder.CloseFile();
```