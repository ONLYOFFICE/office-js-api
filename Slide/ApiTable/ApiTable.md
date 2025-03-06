# ApiTable

Represents the ApiTable class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | None | Adds a new column to the end of the current table. |
| [AddElement](./Methods/AddElement.md) | None | Adds a paragraph or a table or a blockLvl content control using its position in the cell. |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Adds a new row to the current table. |
| [Copy](./Methods/Copy.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a copy of the current table. |
| [GetClassType](./Methods/GetClassType.md) | "table" | Returns the type of the ApiTable object. |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Returns a row by its index. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null".\n-**Warning**: The number of cells in any row and the number of rows in the current table may be changed. |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a table column with the specified cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a table row with the specified cell. |
| [SetShd](./Methods/SetShd.md) | None | Specifies the shading which shall be applied to the extents of the current table. |
| [SetTableLook](./Methods/SetTableLook.md) | None | Specifies the components of the conditional formatting of the referenced table style (if one exists)\nwhich shall be applied to the set of table rows with the current table-level property exceptions. A table style\ncan specify up to six different optional conditional formats [Example: Different formatting for first column],\nwhich then can be applied or omitted from individual table rows in the parent table.\n\nThe default setting is to apply the row and column banding formatting, but not the first row, last row, first\ncolumn, or last column formatting. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTable object into the JSON object. |
