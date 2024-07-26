# GetCell

Returns a cell by its position.

## Syntax

expression.GetCell(nRow, nCell);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row position in the current table where the specified cell is placed. |
| nCell | Required | number |  | The cell position in the current table. |

## Returns

ApiTableCell, null

## Example

This example shows how to get a cell by its position.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCell = oTable.GetCell(0, 0);
oCell.GetContent().GetElement(0).AddText("Cell #1");
```
