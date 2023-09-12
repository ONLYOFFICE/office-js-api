# GetAllTables

Returns an array of all tables from the current document content.

## Syntax

expression.GetAllTables();

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiTable](../../ApiTable/ApiTable.md)>

## Example

This example showh how to get an array of all tables from the document content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oShape);
var oDocContent = oShape.GetDocContent();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocContent.Push(oTable);
var aTables = oDocContent.GetAllTables();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text in the first cell.");
var oCell = aTables[0].GetCell(0,0);
aTables[0].AddElement(oCell, 0, oParagraph);
builder.SaveFile("docx", "GetAllTables.docx");
builder.CloseFile();
```