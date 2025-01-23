# SetCellMarginBottom

Specifies an amount of space which will be left between the bottom extent of the cell contents and the border
of a specific table cell within a table.

## Syntax

expression.SetCellMarginBottom(nValue);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The value for the amount of space below the bottom extent of the cell measured in twentieths of a point (1/1440 of an inch). If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell bottom margin will be used, otherwise the table cell bottom margin will be overridden with the specified value for the current cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies an amount of space which will be left between the bottom extent of the cell contents and the border of a specific table cell within a table.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginBottom(720);
table.SetStyle(tableStyle);
doc.Push(table);
```
