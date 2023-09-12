# SetPosition

Changes the position for the drawing object.
<br>Please note that the horizontal and vertical offsets are calculated within the limits of the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

## Syntax

expression.SetPosition(nFromCol, nColOffset, nFromRow, nRowOffset);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nFromCol | Required | Number | The number of the column where the beginning of the drawing object will be placed. |
| nColOffset | Required | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromCol column to the left part of the drawing object measured in English measure units. |
| nFromRow | Required | Number | The number of the row where the beginning of the drawing object will be placed. |
| nRowOffset | Required | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromRow row to the upper part of the drawing object measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example changes the position for the drawing object.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDrawing.SetSize(120 * 36000, 70 * 36000);
oDrawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
builder.SaveFile("xlsx", "SetPosition.xlsx");
builder.CloseFile();
```