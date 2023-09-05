# GetEndNotesFirstParagraphs

Returns the first paragraphs from all endnotes in the current document.

## Syntax

expression.GetEndNotesFirstParagraphs();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get the first paragraphs from all endnotes in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddEndnote();
var aEndNotesFirstParagraphs = oDocument.GetEndNotesFirstParagraphs();
aEndNotesFirstParagraphs[0].AddText("Endnote 1");
aEndNotesFirstParagraphs[0].SetBold(true);
builder.SaveFile("docx", "GetEndNotesFirstParagraphs.docx");
builder.CloseFile();
```