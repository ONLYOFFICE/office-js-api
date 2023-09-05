# GetReply

Returns the specified comment reply.

## Syntax

expression.GetReply(nIndex?);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nIndex | Optional | Number | The comment reply index. Default value is "0". |

## Returns

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md) &#124; null

## Example

This example shows how to get the specified comment reply.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
var oCommentReply = aComments[0].GetReply(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("First comment reply: " + oCommentReply.GetText());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetReply.docx");
builder.CloseFile();
```