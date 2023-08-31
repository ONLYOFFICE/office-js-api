# GetTableTitle

Returns the table title (caption).<br>Inherited From: [ApiTablePr#GetTableTitle](../../ApiTablePr/Methods/GetTableTitle.md)

## Syntax

expression.GetTableTitle();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the table title.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableTitle("Table 1");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table title: " + oTable.GetTableTitle());
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTableTitle.docx");
builder.CloseFile();
```