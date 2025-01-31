# GetCellsCount

Returns a number of cells in the current row.

## Syntax

```javascript
expression.GetCellsCount();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a number of cells in the row.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
let cellsCount = tableRow.GetCellsCount();
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of cells in the first row = " + cellsCount);
```
