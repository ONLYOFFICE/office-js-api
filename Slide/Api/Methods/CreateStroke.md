# CreateStroke

Creates a stroke adding shadows to the element.

## Syntax

expression.CreateStroke(nWidth, oFill);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The width of the shadow measured in English measure units. |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The fill type used to create the shadow. |

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)

## Example

This example shows how to crate a stroke.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(3 * 36000, oFill1);
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oSlide.AddObject(oShape);
oShape.SetPosition(608400, 1267200);
builder.SaveFile("pptx", "CreateStroke.pptx");
builder.CloseFile();
```