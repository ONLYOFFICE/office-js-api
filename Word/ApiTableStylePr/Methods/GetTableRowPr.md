# GetTableRowPr

Returns a set of the table row properties which will be applied to all the rows within a table which match the conditional formatting type.

## Syntax

expression.GetTableRowPr();

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## Example

This example shows how to get a set of the table row properties which will be applied to all the rows within a table which match the conditional formatting type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("wholeTable");
oTable.SetTableLook(true, true, true, true, true, true);
oTableStylePr.GetTableRowPr().SetHeight("atLeast", 720);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTableRowPr.docx");
builder.CloseFile();
```