# GetRow

Returns a table row by its position in the table.

## Syntax

expression.GetRow(nPos);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The row position within the table. |

## Returns

ApiTableRow, null

## Example

This example shows how to get a row by its index.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 2x2 table and add a new row, so that it becomes 2x3:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.AddRow(oTable.GetRow(1).GetCell(0), true);
oDocument.Push(oTable);
```
