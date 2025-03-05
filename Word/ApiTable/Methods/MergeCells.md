# MergeCells

Merges an array of cells. If the merge is done successfully, it will return the resulting merged cell, otherwise the result will be "null".
💡 The number of cells in any row and the number of rows in the current table may be changed.

## Syntax

```javascript
expression.MergeCells(aCells);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aCells | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md)[] |  | The array of cells to be merged. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

This example merges an array of cells.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(5, 5);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.MergeCells([table.GetRow(1).GetCell(1), table.GetRow(1).GetCell(2), table.GetRow(2).GetCell(1), table.GetRow(2).GetCell(2)]);
cell.GetContent().GetElement(0).AddText("Merged cell");
doc.Push(table);
```
