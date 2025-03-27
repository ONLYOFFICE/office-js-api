# CreateSolidFill

Creates a solid fill to apply to the object using a selected solid color as the object background.

## Syntax

```javascript
expression.CreateSolidFill(uniColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| uniColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) |  | The color used for the element fill. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates a solid fill to apply to the object using a selected solid color as the object background.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let rgbColor = Api.CreateRGBColor(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
