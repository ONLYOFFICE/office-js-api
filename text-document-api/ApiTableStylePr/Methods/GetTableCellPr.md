# GetTableCellPr

Returns a set of the table cell properties which will be applied to all the cells within a table which match the conditional formatting type.

## Syntax

```javascript
expression.GetTableCellPr();
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md)

## Example

This example shows how to get a set of the table cell properties which will be applied to all the cells within a table which match the conditional formatting type.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTableCellPr().SetShd("clear", 0xEE, 0xEE, 0xEE);
table.SetStyle(tableStyle);
doc.Push(table);
```
