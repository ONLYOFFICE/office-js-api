# SetUserId

Sets the user ID to the comment reply author.

## Syntax

expression.SetUserId(sUserId);

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sUserId | Required | string |  | The user ID of the comment reply author. |

## Returns

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md)

## Example

This example sets the user ID to the comment reply author.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
var oCommentReply = aComments[0].GetReply(0);
oCommentReply.SetUserId("uid-1");
var sUserId = oCommentReply.GetUserId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment reply user ID: " + sUserId);
oDocument.Push(oParagraph);
```
