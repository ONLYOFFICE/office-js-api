# Remove

Removes the current table row.

## Syntax

expression.Remove();

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example removes the table row.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oRow.GetCell(0).GetContent().GetElement(0).AddText("First row");
oRow.Remove();
oDocument.Push(oTable);
```
