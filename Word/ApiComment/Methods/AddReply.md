# AddReply

Adds a reply to a comment.

## Syntax

expression.AddReply(sText, sAuthorName, sUserId, nPos?);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment reply text. |
| sAuthorName | Optional | String | The name of the comment reply author. |
| sUserId | Optional | String | The user ID of the comment reply author. |
| nPos | Optional | Number | The comment reply position. Default value is "this.GetRepliesCount()". |

## Returns

[ApiComment](../ApiComment.md)

## Example

This example adds a comment and makes a reply for it.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
builder.SaveFile("docx", "AddReply.docx");
builder.CloseFile();
```