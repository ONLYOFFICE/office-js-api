# SetUserId

Sets the user ID to the comment author.

## Syntax

expression.SetUserId(sUserId);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sUserId | Required | String | The user ID of the comment author. |

## Returns

[ApiComment](../ApiComment.md)

## Example

This example sets the user ID to the comment author.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetUserId("uid-1");
var sUserId = aComments[0].GetUserId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment user ID: " + sUserId);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetUserId.docx");
builder.CloseFile();
```