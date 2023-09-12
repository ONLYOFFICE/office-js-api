# AddComment

Adds a comment to the current run.
<br>Please note that this run must be in the document.

## Syntax

expression.AddComment(sText, sAuthor);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment text. |
| sAuthor | Optional | String | The author's name. Default value is "". |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if the comment was not added)

## Example

This example adds a comment to the run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. Nothing special.");
oParagraph.AddElement(oRun);
oRun.AddComment("comment", "John Smith");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();
```