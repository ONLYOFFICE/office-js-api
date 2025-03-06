# SetCellMarginLeft

Specifies an amount of space which will be left between the left extent of the cell contents and \nthe border of a specific table cell within a table.

## Syntax

```javascript
expression.SetCellMarginLeft(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The value for the amount of space to the left extent of the cell measured in twentieths\nof a point (1/1440 of an inch). If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell left margin will be used, otherwise\nthe table cell left margin will be overridden with the specified value for the current cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies an amount of space which will be left between the left extent of the cell contents and the border of a specific table cell within a table.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the left margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginLeft(720);
table.SetStyle(tableStyle);
doc.Push(table);
```
