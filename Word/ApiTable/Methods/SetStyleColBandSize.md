# SetStyleColBandSize

Specifies a number of columns which will comprise each table column band for this table style.

## Syntax

```javascript
expression.SetStyleColBandSize(nCount);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | The number of columns measured in positive integers. |

## Returns

This method doesn't return any data.

## Example

This example specifies a number of columns which will comprise each table column band for this table style.

```javascript
let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleColBandSize(2);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(0).GetCell(3).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(3).GetContent().GetElement(0).AddText("Normal");
doc.Push(table);
```
