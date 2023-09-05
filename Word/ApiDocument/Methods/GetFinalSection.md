# GetFinalSection

Returns the document final section.

## Syntax

expression.GetFinalSection();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiSection](../../ApiSection/ApiSection.md)

## Example

This example shows how to get the document final section.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
var oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is the text in the default header");
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(22);
oTextPr.SetLanguage("en-US");
oTextPr.SetFontFamily("Calibri");
var oParaPr = oDocument.GetDefaultParaPr();
oParaPr.SetSpacingLine(276, "auto");
oParaPr.SetSpacingAfter(200);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a text in a paragraph.");
builder.SaveFile("docx", "GetFinalSection.docx");
builder.CloseFile();
```