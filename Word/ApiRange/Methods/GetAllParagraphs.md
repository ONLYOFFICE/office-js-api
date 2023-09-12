# GetAllParagraphs

Returns a collection of paragraphs that represents all the paragraphs in the specified range.

## Syntax

expression.GetAllParagraphs();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get a collection of paragraphs that represents all the paragraphs in the specified range.

```javascript
builder.CreateFile("docx");
var oDocument = editor.GetDocument();
var oFParagraph = oDocument.GetElement(0);
oFParagraph.AddText("First paragraph");
var oSParagraph = editor.CreateParagraph();
oSParagraph.AddText("Second Paragraph");
oDocument.Push(oSParagraph);
var oRange = oDocument.GetRange(0, 28);
var arrParagraphs = oRange.GetAllParagraphs();
arrParagraphs[0].SetBold("true");
builder.SaveFile("docx", "GetAllParagraphs.docx");
builder.CloseFile();
```