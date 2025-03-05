# SetPosition

Changes the position for the drawing object.💡 Please note that the horizontal and vertical offsets are calculated within the limits ofthe specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

## Syntax

```javascript
expression.SetPosition(nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nFromCol | Required | number |  | The number of the column where the beginning of the drawing object will be placed. |
| nColOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromCol column to the left part of the drawing object measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the beginning of the drawing object will be placed. |
| nRowOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromRow row to the upper part of the drawing object measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example changes the position for the drawing object.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
