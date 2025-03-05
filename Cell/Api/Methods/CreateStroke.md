# CreateStroke

Creates a stroke adding shadows to the element.

## Syntax

```javascript
expression.CreateStroke(width, fill);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The width of the shadow measured in English measure units. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to create the shadow. |

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)

## Example

This example creates a stroke adding shadows to the element.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let fill1 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(3 * 36000, fill1);
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
