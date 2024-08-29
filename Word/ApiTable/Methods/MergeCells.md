# MergeCells

Merges an array of cells. If the merge is done successfully, it will return the resulting merged cell, otherwise the result will be "null".
💡 The number of cells in any row and the number of rows in the current table may be changed.

## Syntax

expression.MergeCells(aCells);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aCells | Required | Array.<[ApiTableCell](../../ApiTableCell/ApiTableCell.md)> |  | The array of cells to be merged. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

This example merges an array of cells.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(5, 5);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.MergeCells([oTable.GetRow(1).GetCell(1), oTable.GetRow(1).GetCell(2), oTable.GetRow(2).GetCell(1), oTable.GetRow(2).GetCell(2)]);
oCell.GetContent().GetElement(0).AddText("Merged cell");
oDocument.Push(oTable);
```
