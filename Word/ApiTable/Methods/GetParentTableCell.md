# GetParentTableCell

Returns a table cell that contains the current table.

## Syntax

```javascript
expression.GetParentTableCell();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## Example

This example shows how to get a table cell that contains the table.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table1 = Api.CreateTable(3, 3);
table1.SetWidth("percent", 100);
table1.SetStyle(tableStyle);
doc.Push(table1);
let table2 = Api.CreateTable(2, 2);
table2.SetWidth("percent", 100);
table2.SetStyle(tableStyle);
let cell = table1.GetCell(0, 0);
table1.AddElement(cell, 0, table2);
let parentTableCell = table2.GetParentTableCell();
parentTableCell.SetShd("clear", 255, 111, 61, false);
```
