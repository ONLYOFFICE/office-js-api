# GetFootnotesFirstParagraphs

Returns the first paragraphs from all footnotes in the current document.

## Syntax

expression.GetFootnotesFirstParagraphs();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example showh how to get the first paragraphs from all footnotes in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddFootnote();
var aFootnotesFirstParagraphs = oDocument.GetFootnotesFirstParagraphs();
aFootnotesFirstParagraphs[0].AddText("Footnote 1");
aFootnotesFirstParagraphs[0].SetBold(true);
builder.SaveFile("docx", "GetFootnotesFirstParagraphs.docx");
builder.CloseFile();
```