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
// How to create a stroke with a gradient fill.

// Set a gradient stroke for a shape.

var oWorksheet = Api.GetActiveSheet();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(3 * 36000, oFill1);
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
```
