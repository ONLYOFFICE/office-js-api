# GetPrevious

Returns the previous row if exists.

## Syntax

```javascript
expression.GetPrevious();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) | null

## Example

This example shows how to get the previous row.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(1);
row.GetCell(1).GetContent().GetElement(0).AddText("Second row");
row.GetPrevious().GetCell(1).GetContent().GetElement(0).AddText("First row");
doc.Push(table);
```
