# ClearBackground

Clears the slide master background.

## Syntax

expression.ClearBackground();

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (return false if slide master doesn't exist)

## Example

This example clears the slide master background.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
oMaster.ClearBackground();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oMaster.AddObject(oShape);
builder.SaveFile("pptx", "AddObject.pptx");
builder.CloseFile();
```