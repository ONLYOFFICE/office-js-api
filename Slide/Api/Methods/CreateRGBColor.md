# CreateRGBColor

Creates an RGB color setting the appropriate values for the red, green and blue color components.

## Syntax

expression.CreateRGBColor(r, g, b);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

[ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)

## Example

This example shows how to create a RGB color for  gradient stop.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oRGBColor = Api.CreateRGBColor(255, 111, 61);
var oGs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
var oGs2 = Api.CreateGradientStop(oRGBColor, 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oSlide.AddObject(oDrawing);
oDrawing.SetPosition(608400, 1267200);
```
