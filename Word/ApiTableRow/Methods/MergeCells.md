# MergeCells

Merges the cells in the current row.

## Syntax

```javascript
expression.MergeCells();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## Example

This example merges the cells in the row.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
table.SetWidth("percent", 100);
row.MergeCells();
doc.Push(table);
```
