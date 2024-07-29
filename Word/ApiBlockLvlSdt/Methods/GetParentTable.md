# GetParentTable

Returns a table that contains the current content control.

## Syntax

expression.GetParentTable();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTable, null

## Example

This example shows how to get a table that contains the current content control.

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
var oParentTable = oBlockLvlSdt.GetParentTable();
oCell = oParentTable.GetRow(2).GetCell(0);
oParentTable.RemoveRow(oCell);
```
