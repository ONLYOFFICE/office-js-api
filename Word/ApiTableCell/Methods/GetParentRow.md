# GetParentRow

Returns a parent row of the current cell.

## Syntax

expression.GetParentRow();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTableRow, null

## Example

This example shows how to get a parent row of the cell.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
var oParentRow = oTable.GetCell(0, 0).GetParentRow();
oParentRow.SetHeight("atLeast", 720);
```
