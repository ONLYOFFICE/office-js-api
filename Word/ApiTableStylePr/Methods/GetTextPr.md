# GetTextPr

Returns a set of the text run properties which will be applied to all the text runs within the table which match the conditional formatting type.

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get a set of the text run properties which will be applied to all the text runs within the table which match the conditional formatting type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the bold font weight to the text in cell #1:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("topLeftCell");
oTable.SetTableLook(true, true, true, true, true, true);
oTableStylePr.GetTextPr().SetBold(true);
oParagraph = oTable.GetRow(0).GetCell(0).GetContent().GetElement(0);
oParagraph.AddText("Bold text");
oParagraph = oTable.GetRow(0).GetCell(1).GetContent().GetElement(0);
oParagraph.AddText("Normal text");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
```