# GetCommentById

Returns a comment from the current document by its ID.

## Syntax

expression.GetCommentById(sId);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sId | Required | String | The comment ID. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null

## Example

This example shows how to get a comment from the document by its ID.

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
builder.SaveFile("docx", "GetCommentById.docx");
builder.CloseFile();
```