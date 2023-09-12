# AddComment

Adds a comment to the current inline content control.
<br>Please note that this inline content control must be in the document.

## Syntax

expression.AddComment(sText, sAuthor?);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment text. |
| sAuthor | Optional | String | The author's name. Default value is "". |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if the comment was not added)

## Example

This example adds a comment to the inline content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.AddComment("comment", "John Smith");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();
```