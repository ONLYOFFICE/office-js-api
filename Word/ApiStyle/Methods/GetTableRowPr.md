# GetTableRowPr

Returns the table row properties of the current style.

## Syntax

```javascript
expression.GetTableRowPr();
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## Example

This example shows how to get the table row properties of the current style.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, false, false);
tableStyle.GetTableRowPr().SetHeight("atLeast", 1440);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
tableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
tableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
tableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);
```
