# RemoveReplies

Removes the specified comment replies.

## Syntax

expression.RemoveReplies(nPos?, nCount?, bRemoveAll?);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | The position of the first comment reply to remove. Default value is "0". |
| nCount | Optional | Number | A number of comment replies to remove. Default value is "1". |
| bRemoveAll | Optional | Boolean | Specifies whether to remove all comment replies or not. Default value is "false". |

## Returns

[ApiComment](../ApiComment.md)

## Example

This example removes the specified comment replies.

```javascript
builder.CreateFile("docx");
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
builder.SaveFile("docx", "RemoveReplies.docx");
builder.CloseFile();
```