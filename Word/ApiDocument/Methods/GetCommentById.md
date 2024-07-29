# GetCommentById

Returns a comment from the current document by its ID.

## Syntax

expression.GetCommentById(sId);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The comment ID. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example shows how to get a comment from the document by its ID.

```javascript
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
```
