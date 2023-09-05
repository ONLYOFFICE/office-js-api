# GetCurrentSlide

Returns the current slide.

## Syntax

expression.GetCurrentSlide();

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md)

## Example

This example shows how to get the current slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetCurrentSlide();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetCurrentSlide.pptx");
builder.CloseFile();
```