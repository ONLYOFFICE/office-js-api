# SetText

Sets the comment text.

## Syntax

expression.SetText(sText);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment text. |

## Returns

[ApiComment](../ApiComment.md)

## Example

This example sets the comment text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetText("new comment's text");
builder.SaveFile("docx", "SetText.docx");
builder.CloseFile();
```