# GetHeight

Returns the presentation height in English measure units.

## Syntax

expression.GetHeight();

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[EMU](../../../Enumerations/Emu.md)

## Example

This example shows how to get the presentation height in English measure units.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var nHeight = oPresentation.GetHeight();
oParagraph.AddText("Height = " + nHeight);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetCurSlideIndex.pptx");
builder.CloseFile();
```