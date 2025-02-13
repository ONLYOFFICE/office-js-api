# Split

Splits the cell into a given number of rows and columns.

## Syntax

```javascript
expression.Split(nRow, nCol);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Optional | Number | true | Count of rows into which the cell will be split. |
| nCol | Optional | Number | true | Count of columns into which the cell will be split. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) | null

## Example

This example splits the cell into a given number of rows and columns.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.Split(2, 2);
```
