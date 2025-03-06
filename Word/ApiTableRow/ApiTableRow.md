# ApiTableRow

Represents the ApiTableRow class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new rows to the current table. |
| [Clear](./Methods/Clear.md) | boolean | Clears the content from the current row. |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Returns a cell by its position. |
| [GetCellsCount](./Methods/GetCellsCount.md) | number | Returns a number of cells in the current row. |
| [GetClassType](./Methods/GetClassType.md) | "tableRow" | Returns a type of the ApiTableRow class. |
| [GetClassType](./Methods/GetClassType.md) | "tableRowPr" | Returns a type of the ApiTableRowPr class. |
| [GetIndex](./Methods/GetIndex.md) | Number | Returns the current row index. |
| [GetNext](./Methods/GetNext.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns the next row if exists. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns the parent table of the current row. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns the previous row if exists. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Merges the cells in the current row. |
| [Remove](./Methods/Remove.md) | boolean | Removes the current table row. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a table row object. The search results are a collection of ApiRange objects. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to all cells in the current table row. |
| [SetHeight](./Methods/SetHeight.md) | None | Sets the height to the current table row within the current table. |
| [SetTableHeader](./Methods/SetTableHeader.md) | None | Specifies that the current table row will be repeated at the top of each new page \ wherever this table is displayed. This gives this table row the behavior of a 'header' row on \ each of these pages. This element can be applied to any number of rows at the top of the \ table structure in order to generate multi-row table headers. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current row. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTableRowPr object into the JSON object. |
