# GetAllTables

Returns an array of all tables from the current document content.<br>Inherited From: [ApiDocumentContent#GetAllTables](../../ApiDocumentContent/Methods/GetAllTables.md)

## Syntax

expression.GetAllTables();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiTable](../../ApiTable/ApiTable.md)>

## Example

This example showh how to get an array of all tables from the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var aTables = oDocument.GetAllTables();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text in the first cell.");
var oCell = aTables[0].GetCell(0,0);
aTables[0].AddElement(oCell, 0, oParagraph);
builder.SaveFile("docx", "GetAllTables.docx");
builder.CloseFile();
```