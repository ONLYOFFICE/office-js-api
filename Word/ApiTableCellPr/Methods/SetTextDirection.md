# SetTextDirection

Specifies the direction of the text flow for this table cell.

## Syntax

```javascript
expression.SetTextDirection(sType);
```

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "lrtb" \| "tbrl" \| "btlr" |  | The available types of the text direction in the table cell: &lt;code&gt;"lrtb"&lt;/code&gt;\n- text direction left-to-right moving from top to bottom, &lt;code&gt;"tbrl"&lt;/code&gt; - text direction top-to-bottom moving from right\nto left, &lt;code&gt;"btlr"&lt;/code&gt; - text direction bottom-to-top moving from left to right. |

## Returns

This method doesn't return any data.

## Example

This example specifies the direction of the text flow for this table cell.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetTextDirection("btlr");
let cell = table.GetRow(0).GetCell(0);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("btlr");
table.SetStyle(tableStyle);
doc.Push(table);
```
