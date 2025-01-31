# CreateLinearGradientFill

Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background.

## Syntax

```javascript
expression.CreateLinearGradientFill(gradientStops, angle);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| gradientStops | Required | Array |  | The array of gradient color stops measured in 1000th of percent. |
| angle | Required | [PositiveFixedAngle](../../Enumeration/PositiveFixedAngle.md) |  | The angle measured in 60000th of a degree that will define the gradient direction. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates a linear gradient fill to apply to the object using the selected linear gradient as the object background.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
```
