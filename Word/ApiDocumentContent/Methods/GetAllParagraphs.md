# GetAllParagraphs

Returns an array of all paragraphs from the current document content.

## Syntax

expression.GetAllParagraphs();

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get an array of all paragraphs from the document content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oShape);
var oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Paragraph 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Paragraph 2");
oDocContent.Push(oParagraph);
var aParagraphs = oDocContent.GetAllParagraphs();
aParagraphs[0].SetBold(true);
builder.SaveFile("docx", "GetAllParagraphs.docx");
builder.CloseFile();
```