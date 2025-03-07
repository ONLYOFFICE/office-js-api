# GetAllShapes

Returns an array with all the shape objects from the slide.

## Syntax

```javascript
expression.GetAllShapes();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)[]

## Example

This example shows how to get an array with all the shape objects from the slide.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oShape);
var aShapes = oSlide.GetAllShapes();
aShapes[0].SetSize(150 * 36000, 65 * 36000);
```
