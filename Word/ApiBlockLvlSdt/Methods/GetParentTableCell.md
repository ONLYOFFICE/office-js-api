# GetParentTableCell

Returns a table cell that contains the current content control.

## Syntax

expression.GetParentTableCell();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTableCell, null

## Example

This example showh how to get a table cell that contains the current content control.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
var oCell = oTable.GetRow(0).GetCell(0);
oCell.AddElement(0, oBlockLvlSdt);
var oParentTableCell = oBlockLvlSdt.GetParentTableCell();
oParentTableCell.SetCellBorderTop("single", 32, 0, 51, 51, 51);
```
