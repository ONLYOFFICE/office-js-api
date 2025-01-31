# GetNext

Returns the next cell if exists.

## Syntax

```javascript
expression.GetNext();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) | null

## Example

This example shows how to get the next cell.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
doc.Push(table);
let nextCell = table.GetCell(0, 0).GetNext();
nextCell.GetContent().GetElement(0).SetBold(true);
```
