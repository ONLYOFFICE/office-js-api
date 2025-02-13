# GetParentTable

Returns the parent table of the current row.

## Syntax

```javascript
expression.GetParentTable();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md) | null

## Example

This example shows how to get the parent table of the row.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let row = table.GetRow(0);
let parentTable = row.GetParentTable();
parentTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
doc.Push(parentTable);
```
