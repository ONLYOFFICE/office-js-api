# GetAllParagraphs

Returns an array of all paragraphs from the current document content.<br>Inherited From: [ApiDocumentContent#GetAllParagraphs](../../ApiDocumentContent/Methods/GetAllParagraphs.md)

## Syntax

expression.GetAllParagraphs();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get an array of all paragraphs from the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Paragraph 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Paragraph 2");
oDocument.AddElement(1, oParagraph);
var aParagraphs = oDocument.GetAllParagraphs();
aParagraphs[0].SetBold(true);
builder.SaveFile("docx", "GetAllParagraphs.docx");
builder.CloseFile();
```