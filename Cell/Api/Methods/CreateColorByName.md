# CreateColorByName

Creates a color selecting it from one of the available color presets.

## Syntax

expression.CreateColorByName(sPresetColor);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sPresetColor | Required | [PresetColor](../../../Enumerations/PresetColor.md) | A preset selected from the list of the available color preset names. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example creates a color selecting it from one of the available color presets.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorByName("peachPuff");
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
builder.SaveFile("xlsx", "CreateColorByName.xlsx");
builder.CloseFile();
```