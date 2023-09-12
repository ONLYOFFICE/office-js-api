# AddComment

Adds a comment to the current paragraph.
<br>Please note that this paragraph must be in the document.

## Syntax

expression.AddComment(sText, sAuthor?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment text. |
| sAuthor | Optional | String | The author's name. Default value is "". |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns "null" if the comment was not added)

## Example

This example adds a comment to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("The comment was added to this document.");
oParagraph.AddComment("comment", "Jane");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();
```