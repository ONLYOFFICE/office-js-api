# GetId

Returns the current comment ID. If the comment doesn't have an ID, null is returned.

## Syntax

expression.GetId();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String &#124; null

## Example

This example shows how to get the comment ID.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sId = aComments[0].GetId();
var oComment = oDocument.GetCommentById(sId);
var sAutor = oComment.GetAutorName();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment author name: " + sAutor);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetId.docx");
builder.CloseFile();
```