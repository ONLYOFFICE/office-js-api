# GetParentTable

Returns the parent table of the current row.

## Syntax

expression.GetParentTable();

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTable, null

## Example

This example shows how to get the parent table of the row.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oTable.SetWidth("percent", 100);
var oRow = oTable.GetRow(0);
var oParentTable = oRow.GetParentTable();
oParentTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
oDocument.Push(oParentTable);
```
