# CreatePresetColor

Creates a color selecting it from one of the available color presets.

## Syntax

expression.CreatePresetColor(sPresetColor);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sPresetColor | Required | [PresetColor](../../../Enumerations/PresetColor.md) | A preset selected from the list of the available color preset names. |

## Returns

[ApiPresetColor](../../ApiPresetColor/ApiPresetColor.md)

## Example

This example creates a color selecting it from one of the available color presets.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oPresetColor = Api.CreatePresetColor("peachPuff");
var oGs1 = Api.CreateGradientStop(oPresetColor, 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
builder.SaveFile("xlsx", "CreatePresetColor.xlsx");
builder.CloseFile();
```