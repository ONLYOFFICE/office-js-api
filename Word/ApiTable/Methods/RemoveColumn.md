# RemoveColumn

Removes a table column with a specified cell.

## Syntax

expression.RemoveColumn(oCell);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell which is placed in the column that will be removed. |

## Returns

boolean

## Example

This example removes a table column with the specified cell.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and remove one column (the second one), so that it becomes 2x3:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetRow(2).GetCell(1);
oTable.RemoveColumn(oCell);
oDocument.Push(oTable);
```
