# SetPosition

Changes the position for the drawing object.💡 Please note that the horizontal and vertical offsets are calculated within the limits ofthe specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

## Syntax

expression.SetPosition(nFromCol, nColOffset, nFromRow, nRowOffset);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nFromCol | Required | number |  | The number of the column where the beginning of the drawing object will be placed. |
| nColOffset | Required | EMU |  | The offset from the nFromCol column to the left part of the drawing object measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the beginning of the drawing object will be placed. |
| nRowOffset | Required | EMU |  | The offset from the nFromRow row to the upper part of the drawing object measured in English measure units.* @see office-js-api/Examples/Cell/ApiDrawing/Methods/SetPosition.js |

## Returns

This method doesn't return any data.