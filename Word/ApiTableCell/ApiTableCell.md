# ApiTableCell

Represents the ApiTableCell class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new columns to the current table. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph or a table or a blockLvl content control using its position in the cell. |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new rows to the current table. |
| [Clear](./Methods/Clear.md) | boolean | Clears the content from the current cell. |
| [GetClassType](./Methods/GetClassType.md) | "tableCell" | Returns a type of the ApiTableCell class. |
| [GetClassType](./Methods/GetClassType.md) | "tableCellPr" | Returns a type of the ApiTableCellPr class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the current cell content. |
| [GetIndex](./Methods/GetIndex.md) | Number | Returns the current cell index. |
| [GetNext](./Methods/GetNext.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns the next cell if exists. |
| [GetParentRow](./Methods/GetParentRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns a parent row of the current cell. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a parent table of the current cell. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns the previous cell if exists. |
| [GetRowIndex](./Methods/GetRowIndex.md) | number | Returns an index of the parent row. |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a column containing the current cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a row containing the current cell. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a table cell object. The search results are a collection of ApiRange objects. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current table cell. |
| [SetCellBorderBottom](./Methods/SetCellBorderBottom.md) | None | Sets the border which will be displayed at the bottom of the current table cell. |
| [SetCellBorderLeft](./Methods/SetCellBorderLeft.md) | None | Sets the border which will be displayed to the left of the current table cell. |
| [SetCellBorderRight](./Methods/SetCellBorderRight.md) | None | Sets the border which will be displayed to the right of the current table cell. |
| [SetCellBorderTop](./Methods/SetCellBorderTop.md) | None | Sets the border which will be displayed at the top of the current table cell. |
| [SetCellMarginBottom](./Methods/SetCellMarginBottom.md) | None | Specifies an amount of space which will be left between the bottom extent of the cell contents and the border\nof a specific table cell within a table. |
| [SetCellMarginLeft](./Methods/SetCellMarginLeft.md) | None | Specifies an amount of space which will be left between the left extent of the cell contents and \nthe border of a specific table cell within a table. |
| [SetCellMarginRight](./Methods/SetCellMarginRight.md) | None | Specifies an amount of space which will be left between the right extent of the cell contents and the border of a specific table cell within a table. |
| [SetCellMarginTop](./Methods/SetCellMarginTop.md) | None | Specifies an amount of space which will be left between the upper extent of the cell contents\nand the border of a specific table cell within a table. |
| [SetCellPr](./Methods/SetCellPr.md) | boolean | Sets the cell properties to the current cell. |
| [SetColumnBackgroundColor](./Methods/SetColumnBackgroundColor.md) | boolean | Sets the background color to all cells in the column containing the current cell. |
| [SetNoWrap](./Methods/SetNoWrap.md) | None | Specifies how the current table cell is laid out when the parent table is displayed in a document. This setting\nonly affects the behavior of the cell when the [ApiTablePr#SetTableLayout](../ApiTablePr/Methods/SetTableLayout.md) table layout for this table is set to use the &lt;code&gt;"autofit"&lt;/code&gt; algorithm. |
| [SetShd](./Methods/SetShd.md) | None | Specifies the shading applied to the contents of the table cell. |
| [SetTextDirection](./Methods/SetTextDirection.md) | None | Specifies the direction of the text flow for this table cell. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Applies the text settings to the entire contents of the current cell. |
| [SetVerticalAlign](./Methods/SetVerticalAlign.md) | None | Specifies the vertical alignment for the text contents within the current table cell. |
| [SetWidth](./Methods/SetWidth.md) | None | Sets the preferred width to the current table cell. |
| [Split](./Methods/Split.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Splits the cell into a given number of rows and columns. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTableCellPr object into the JSON object. |
