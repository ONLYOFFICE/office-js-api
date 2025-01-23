# SetStyleRowBandSize

Specifies a number of rows which will comprise each table row band for this table style.

## Syntax

expression.SetStyleRowBandSize(nCount);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | The number of rows measured in positive integers. |

## Returns

This method doesn't return any data.

## Example

This example specifies a number of rows which will comprise each table row band for this table style.

```javascript
let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Normal");
table.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(2).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(2).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(3).GetCell(0).GetContent().GetElement(0).AddText("Normal");
table.GetRow(3).GetCell(1).GetContent().GetElement(0).AddText("Normal");
doc.Push(table);
```
