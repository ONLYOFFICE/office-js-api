# GetParaPr

Returns the paragraph properties of the current style.

## Syntax

expression.GetParaPr();

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

This example shows how ot get the paragraph properties of the current style.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNormalStyle = oDocument.GetDefaultStyle("paragraph");
var oParaPr = oNormalStyle.GetParaPr();
oParaPr.SetSpacingLine(480, "auto");
oParaPr.SetJc("both");
oParaPr.SetIndFirstLine(720);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
oParagraph.AddText("We do not change the style of the paragraph itself. ");
oParagraph.AddText("Only document-wide paragraph styles are applied.");
builder.SaveFile("docx", "GetParaPr.docx");
builder.CloseFile();
```