# CreateGradientStop

Creates a gradient stop used for different types of gradients.

## Syntax

expression.CreateGradientStop(oUniColor, nPos);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oUniColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) | The color used for the gradient stop. |
| nPos | Required | [PositivePercentage](../../../Enumerations/PositivePercentage.md) | The position of the gradient stop measured in 1000th of percent. |

## Returns

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)

## Example

This example creates a gradient stop used for different types of gradients.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
builder.SaveFile("xlsx", "CreateGradientStop.xlsx");
builder.CloseFile();
```