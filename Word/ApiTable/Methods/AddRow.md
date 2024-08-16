# AddRow

Adds a new row to the current table.

## Syntax

expression.AddRow(oCell, isBefore);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell after which a new row will be added. If not specified, a new row will be added at the end of the table. |
| isBefore | Optional | boolean | false | Adds a new row before (false) or after (true) the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

This example adds a new row to the table.

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
