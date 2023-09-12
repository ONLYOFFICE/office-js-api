# GetShd

Returns the shading applied to the contents of the paragraph.<br>Inherited From: [ApiParaPr#GetShd](../../ApiParaPr/Methods/GetShd.md)

## Syntax

expression.GetShd();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md) &#124; null

## Example

This example shows how to get the shading applied to the contents of the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a shade to a paragraph. ");
oParagraph.SetShd("clear", 255, 111, 61, false);
var oShade = oParagraph.GetShd();
oParagraph = Api.CreateParagraph();
var oFill = Api.CreateSolidFill(oShade);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 10 * 36000, 3 * 36000, oFill, oStroke);
oParagraph.AddText("Shade: ");
oParagraph.AddDrawing(oDrawing);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetShd.docx");
builder.CloseFile();
```