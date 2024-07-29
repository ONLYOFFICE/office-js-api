# Clear

Clears the content from the current row.

## Syntax

expression.Clear();

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clears the content from the row.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oRow.GetCell(0).GetContent().GetElement(0).AddText("First row");
oRow.Clear();
oRow = oTable.GetRow(1);
oRow.GetCell(0).GetContent().GetElement(0).AddText("The first row content was cleared.");
oDocument.Push(oTable);
```
