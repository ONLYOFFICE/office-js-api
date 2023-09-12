# SetBackground

Sets the background to the current slide master.

## Syntax

expression.SetBackground(oApiFill);

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the presentation slide master background. |

## Returns

Boolean

## Example

This example sets the background to the current slide master.

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
oMaster.SetBackground(oFill);
builder.SaveFile("pptx", "AddObject.pptx");
builder.CloseFile();
```