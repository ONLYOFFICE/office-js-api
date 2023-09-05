# GetAllHeadingParagraphs

Returns all heading paragraphs from the current document.

## Syntax

expression.GetAllHeadingParagraphs();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get all heading paragraphs from the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 1");
var aHeadingParagraphs = oDocument.GetAllHeadingParagraphs();
aHeadingParagraphs[0].SetCaps(true);
builder.SaveFile("docx", "GetAllHeadingParagraphs.docx");
builder.CloseFile();
```