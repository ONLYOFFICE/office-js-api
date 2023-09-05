# GetAllParagraphs

Returns a collection of paragraph objects in the current content control.

## Syntax

expression.GetAllParagraphs();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get a collection of paragraph objects in the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText("This is the first paragraph in the content control.");
oBlockLvlSdt.AddElement(oParagraph1, 0);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph in the content control.");
oBlockLvlSdt.AddElement(oParagraph2, 1);
oDocument.AddElement(0, oBlockLvlSdt);
var aParagraphs = oBlockLvlSdt.GetAllParagraphs();
aParagraphs[0].SetBold(true);
builder.SaveFile("docx", "GetAllParagraphs.docx");
builder.CloseFile();
```