# GetParaPr

Returns a set of the paragraph properties which will be applied to all the paragraphs within a table which match the conditional formatting type.

## Syntax

expression.GetParaPr();

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

This example shows how to get a set of the paragraph properties which will be applied to all the paragraphs within a table which match the conditional formatting type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the text alignment to center for row #1:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("firstRow");
oTable.SetTableLook(true, true, true, true, true, true);
var oParaPr = oTableStylePr.GetParaPr();
oParaPr.SetJc("center");
oParagraph = oTable.GetRow(0).GetCell(0).GetContent().GetElement(0);
oParagraph.AddText("This is a paragraph with the text in it aligned by the center.");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "GetParaPr.docx");
builder.CloseFile();
```