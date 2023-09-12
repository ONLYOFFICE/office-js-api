# AddComment

Adds a comment to the current block content control.
<br>
Please note that the current block content control must be in the document.

## Syntax

expression.AddComment(sText, sAuthor?);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment text. |
| sAuthor | Required | String | The author's name. Default value is "". |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if the comment was not added)

## Example

This example adds comment to the block content control

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.AddComment("comment", "John Smith");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();
```