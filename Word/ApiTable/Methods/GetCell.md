# GetCell

Returns a cell by its position.

## Syntax

```javascript
expression.GetCell(nRow, nCell);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row position in the current table where the specified cell is placed. |
| nCell | Required | number |  | The cell position in the current table. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) | null

## Example

This example shows how to get a cell by its position.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.GetContent().GetElement(0).AddText("Cell #1");
```
