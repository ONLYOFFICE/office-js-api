# RemoveReplies

Removes the specified comment replies.

## Syntax

expression.RemoveReplies(nPos, nCount, bRemoveAll);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | false | The position of the first comment reply to remove. |
| nCount | Optional | Number | true | A number of comment replies to remove. |
| bRemoveAll | Optional | boolean | false | Specifies whether to remove all comment replies or not. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example removes the specified comment replies.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
aComments[0].RemoveReplies();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The comment replies were removed");
oDocument.Push(oParagraph);
```
