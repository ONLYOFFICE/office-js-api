# ApiTableRow

Represents the ApiTableRow class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "tableRow" | Returns a type of the ApiTableRow class. |
| [GetCellsCount](./Methods/GetCellsCount.md) | number | Returns a number of cells in the current row. |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Returns a cell by its position. |
| [GetIndex](./Methods/GetIndex.md) | Number | Returns the current row index. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns the parent table of the current row. |
| [GetNext](./Methods/GetNext.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns the next row if exists. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns the previous row if exists. |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new rows to the current table. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Merges the cells in the current row. |
| [Clear](./Methods/Clear.md) | boolean | Clears the content from the current row. |
| [Remove](./Methods/Remove.md) | boolean | Removes the current table row. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current row. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a table row object. The search results are a collection of ApiRange objects. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to all cells in the current table row. |
| [GetClassType](./Methods/GetClassType.md) | "tableRowPr" | Returns a type of the ApiTableRowPr class. |
| [SetHeight](./Methods/SetHeight.md) | None | Sets the height to the current table row within the current table. |
| [SetTableHeader](./Methods/SetTableHeader.md) | None | Specifies that the current table row will be repeated at the top of each new page  wherever this table is displayed. This gives this table row the behavior of a 'header' row on  each of these pages. This element can be applied to any number of rows at the top of the  table structure in order to generate multi-row table headers. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTableRowPr object into the JSON object. |
