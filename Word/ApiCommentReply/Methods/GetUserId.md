# GetUserId

Returns the user ID of the comment reply author.

## Syntax

expression.GetUserId();

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the user ID of the comment reply author.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
var oCommentReply = aComments[0].GetReply(0);
oCommentReply.SetUserId("uid-2");
var sUserId = oCommentReply.GetUserId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment reply user ID: " + sUserId);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetUserId.docx");
builder.CloseFile();
```