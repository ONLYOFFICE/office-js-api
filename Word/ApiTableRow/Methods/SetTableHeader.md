# SetTableHeader

Specifies that the current table row will be repeated at the top of each new page 
wherever this table is displayed. This gives this table row the behavior of a 'header' row on 
each of these pages. This element can be applied to any number of rows at the top of the 
table structure in order to generate multi-row table headers.

## Syntax

expression.SetTableHeader(isHeader);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHeader | Required | boolean |  | The true value means that the current table row will be repeated at the top of each new page. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the current table row will be repeated at the top of each new page wherever this table is displayed.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set all table rows as the table headers:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetTableHeader(true);
table.SetStyle(tableStyle);
doc.Push(table);
```
