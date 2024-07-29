# GetParentTable

Returns a table that contains the current run.

## Syntax

expression.GetParentTable();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTable, null

## Example

This example shows how to get a table that contains the run.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
var oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
var oParentTable = oRun.GetParentTable();
oCell = oParentTable.GetRow(2).GetCell(0);
oParentTable.RemoveRow(oCell);
```
