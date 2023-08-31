# GetTableDescription

Returns the table description.<br>Inherited From: [ApiTablePr#GetTableDescription](../../ApiTablePr/Methods/GetTableDescription.md)

## Syntax

expression.GetTableDescription();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the table description.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableDescription("Empty table");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table description: " + oTable.GetTableDescription());
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTableDescription.docx");
builder.CloseFile();
```