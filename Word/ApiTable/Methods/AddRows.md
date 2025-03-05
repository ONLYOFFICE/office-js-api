# AddRows

Adds the new rows to the current table.

## Syntax

```javascript
expression.AddRows(oCell, nCount, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell after which the new rows will be added. If not specified, the new rows will be added at the end of the table. |
| nCount | Required | Number |  | Count of rows to be added. |
| isBefore | Optional | boolean | false | Adds the new rows before (false) or after (true) the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

This example adds the new rows to the table.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
table.AddRows(cell, 2, false);
```
