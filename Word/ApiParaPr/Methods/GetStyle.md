# GetStyle

Returns the paragraph style method.

## Syntax

expression.GetStyle();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md) &#124; null

## Example

This example shows how to get the paragraph style.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oHeading6Style = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetJc("center");
oParaPr.SetStyle(oHeading6Style);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
var oStyle = oParaPr.GetStyle();
oParagraph.AddLineBreak();
oParagraph.AddText("Style: " + oStyle.GetName());
builder.SaveFile("docx", "GetStyle.docx");
builder.CloseFile();
```