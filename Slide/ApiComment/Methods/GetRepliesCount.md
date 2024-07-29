# GetRepliesCount

Returns a number of the comment replies.

## Syntax

expression.GetRepliesCount();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of the comment replies.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
var nReplies = aComments[0].GetRepliesCount();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Number of comment replies: " + nReplies);
oDocument.Push(oParagraph);
```
