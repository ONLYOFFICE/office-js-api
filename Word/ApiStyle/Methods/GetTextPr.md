# GetTextPr

Returns the text properties of the current style.

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get the text properties of the current style.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNormalStyle = oDocument.GetDefaultStyle("paragraph");
var oTextPr = oNormalStyle.GetTextPr();
oTextPr.SetColor(0x26, 0x26, 0x26, false);
oTextPr.SetFontFamily("Calibri Light");
oTextPr.SetFontSize(32);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text color, font family and font size set using the text style. ");
oParagraph.AddText("We do not change the style of the paragraph itself. ");
oParagraph.AddText("Only document-wide text styles are applied.");
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
```