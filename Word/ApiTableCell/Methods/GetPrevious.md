# GetPrevious

Returns the previous cell if exists.

## Syntax

expression.GetPrevious();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTableCell, null

## Example

This example shows how to get the previous cell.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTable.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
oDocument.Push(oTable);
var oPreviousCell = oTable.GetCell(0, 1).GetPrevious();
oPreviousCell.GetContent().GetElement(0).SetBold(true);
```
