# AddShape

Adds a shape to the current sheet with the parameters specified.💡 Please note that the horizontal and vertical offsets arecalculated within the limits of the specified column and row cellsonly. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

## Syntax

expression.AddShape(sType, nWidth, nHeight, oFill, oStroke, nFromCol, nColOffset, nFromRow, nRowOffset);

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