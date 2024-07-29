# Split

Splits the cell into a given number of rows and columns.

## Syntax

expression.Split(oCell, nRow, nCol);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell which will be split. |
| nRow | Optional | Number | true | Count of rows into which the cell will be split. |
| nCol | Optional | Number | true | Count of columns into which the cell will be split. |

## Returns

ApiTable, null

## Example

This example splits the cell into a given number of rows and columns.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCell = oTable.GetCell(0, 0);
oTable.Split(oCell, 2, 2);
```
