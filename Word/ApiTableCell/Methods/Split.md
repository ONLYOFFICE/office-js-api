# Split

Splits the cell into a given number of rows and columns.

## Syntax

expression.Split(nRow, nCol);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
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
oCell.Split(2, 2);
```
