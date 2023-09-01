# GetTableCellPr

Returns a set of the table cell properties which will be applied to all the cells within a table which match the conditional formatting type.

## Syntax

expression.GetTableCellPr();

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md)

## Example

This example shows how to get a set of the table cell properties which will be applied to all the cells within a table which match the conditional formatting type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("topLeftCell");
oTable.SetTableLook(true, true, true, true, true, true);
oTableStylePr.GetTableCellPr().SetShd("clear", 0xEE, 0xEE, 0xEE);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTableCellPr.docx");
builder.CloseFile();
```