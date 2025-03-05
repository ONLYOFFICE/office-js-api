# CreatePresetColor

Creates a color selecting it from one of the available color presets.

## Syntax

```javascript
expression.CreatePresetColor(presetColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| presetColor | Required | [PresetColor](../../Enumeration/PresetColor.md) |  | A preset selected from the list of the available color preset names. |

## Returns

[ApiPresetColor](../../ApiPresetColor/ApiPresetColor.md)

## Example

This example creates a color selecting it from one of the available color presets.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let presetColor = Api.CreatePresetColor("peachPuff");
let gs1 = Api.CreateGradientStop(presetColor, 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
