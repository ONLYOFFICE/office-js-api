# AddShape

Adds a shape to the current sheet with the parameters specified.💡 Please note that the horizontal and vertical offsets arecalculated within the limits of the specified column and row cellsonly. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

## Syntax

```javascript
expression.AddShape(sType, nWidth, nHeight, oFill, oStroke, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | The shape type which specifies the preset shape geometry. |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The shape width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The shape height in English measure units. |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the shape. |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the element shadow. |
| nFromCol | Required | number |  | The number of the column where the beginning of the shape will be placed. |
| nColOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromCol column to the left part of the shape measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the beginning of the shape will be placed. |
| nRowOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromRow row to the upper part of the shape measured in English measure units. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

This example adds a shape to the sheet with the parameters specified.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
```
