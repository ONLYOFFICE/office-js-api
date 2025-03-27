# GetFinalSection

Returns the document final section.

## Syntax

```javascript
expression.GetFinalSection();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSection](../../ApiSection/ApiSection.md)

## Example

This example shows how to get the document final section.

```javascript editor-docx
let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
let paragraph = header.GetElement(0);
paragraph.AddText("This is the text in the default header");
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(22);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Calibri");
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
paragraph = doc.GetElement(0);
paragraph.AddText("This is a text in a paragraph.");
```
