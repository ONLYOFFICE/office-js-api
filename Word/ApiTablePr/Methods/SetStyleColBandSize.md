# SetStyleColBandSize

Specifies a number of columns which will comprise each table column band for this table style.

## Syntax

expression.SetStyleColBandSize(nCount);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number | The number of columns measured in positive integers. |

## Returns

This method doesn't return any data.

## Example

This example specifies a number of columns which will comprise each table column band for this table style.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
oDocument.RemoveAllElements();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(4, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oTablePr = oTableStyle.GetTablePr();
oTable.SetTableLook(true, true, true, true, true, true);
oTablePr.SetStyleColBandSize(2);
oTableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
oTable.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Bold");
oTable.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Bold");
oTable.GetRow(0).GetCell(2).GetContent().GetElement(0).AddText("Normal");
oTable.GetRow(0).GetCell(3).GetContent().GetElement(0).AddText("Normal");
oTable.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
oTable.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
oTable.GetRow(1).GetCell(2).GetContent().GetElement(0).AddText("Normal");
oTable.GetRow(1).GetCell(3).GetContent().GetElement(0).AddText("Normal");
oDocument.Push(oTable);
builder.SaveFile("docx", "SetStyleColBandSize.docx");
builder.CloseFile();
```