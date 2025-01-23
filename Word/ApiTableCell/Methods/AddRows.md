# AddRows

Adds the new rows to the current table.

## Syntax

expression.AddRows(nCount, isBefore);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number |  | Count of rows to be added. |
| isBefore | Optional | boolean | false | Specifies if the new rows will be added before or after the current cell. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) | null

## Example

This example adds the new rows to the table.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
table.GetCell(0, 0).AddRows(2, false);
```
