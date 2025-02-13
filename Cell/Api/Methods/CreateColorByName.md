# CreateColorByName

Creates a color selecting it from one of the available color presets.

## Syntax

```javascript
expression.CreateColorByName(sPresetColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPresetColor | Required | [PresetColor](../../Enumeration/PresetColor.md) |  | A preset selected from the list of the available color preset names. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example creates a color selecting it from one of the available color presets.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorByName("peachPuff");
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
```
