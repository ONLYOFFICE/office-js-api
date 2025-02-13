# GetParentTable

Returns a parent table of the current cell.

## Syntax

```javascript
expression.GetParentTable();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md) | null

## Example

This example shows how to get a parent table of the cell.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
let parentTable = table.GetCell(0, 0).GetParentTable();
parentTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
```
