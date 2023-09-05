# GetHeight

Returns the height of the current drawing.

## Syntax

expression.GetHeight();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[EMU](../../../Enumerations/Emu.md)

## Example

This example gets a height of a shape and inserts it into the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var nHeight = oShape.GetHeight();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Drawing height: " + nHeight);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetHeight.pptx");
builder.CloseFile();
```