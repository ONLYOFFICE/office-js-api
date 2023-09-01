# GetTablePr

Returns a set of the table properties which will be applied to all the regions within a table which match the conditional formatting type.

## Syntax

expression.GetTablePr();

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTablePr](../../ApiTablePr/ApiTablePr.md)

## Example

This example shows how to get  set of the table properties which will be applied to all the regions within a table which match the conditional formatting type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the bottom 4 point black border to it:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("wholeTable");
oTable.SetTableLook(true, true, true, true, true, true);
oTableStylePr.GetTablePr().SetTableBorderBottom("single", 32, 0, 51, 51, 51);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTablePr.docx");
builder.CloseFile();
```