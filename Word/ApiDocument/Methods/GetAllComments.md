# GetAllComments

Returns all comments from the current document.

## Syntax

expression.GetAllComments();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiComment](../../ApiComment/ApiComment.md)>

## Example

This example shows how to get all comments from the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sType = aComments[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllComments.docx");
builder.CloseFile();
```