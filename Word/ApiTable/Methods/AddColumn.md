# AddColumn

Adds a new column to the current table.

## Syntax

expression.AddColumn(oCell, isBefore);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell after which a new column will be added. If not specified, a new column will be added at the end of the table. |
| isBefore | Optional | boolean | false | Adds a new column before (false) or after (true) the specified cell. If no cell is specified,then this parameter will be ignored. |

## Returns

This method doesn't return any data.

## Example

This example adds a new column to the table.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 2x2 table and add a new column, so that it becomes 3x2:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.AddColumn(oTable.GetRow(0).GetCell(1), true);
oDocument.Push(oTable);
```
