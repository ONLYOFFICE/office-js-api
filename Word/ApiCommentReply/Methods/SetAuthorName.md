# SetAuthorName

Sets the comment reply author's name.

## Syntax

expression.SetAuthorName(sAuthorName);

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | String | The comment reply author's name. |

## Returns

[ApiCommentReply](../ApiCommentReply.md)

## Example

This example sets the comment reply author's name.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "John Smith", "uid-1", 0);
var oCommentReply = aComments[0].GetReply(0);
oCommentReply.SetAuthorName("Mark Potato");
var sAuthorName = oCommentReply.GetAuthorName();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment reply author name: " + sAuthorName);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetAuthorName.docx");
builder.CloseFile();
```