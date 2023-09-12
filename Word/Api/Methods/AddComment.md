# AddComment

Adds a comment to the specifed document element or array of Runs.

## Syntax

expression.AddComment(oElement, sText, sAuthor?); 

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | Array<[ApiRun](../../ApiRun/ApiRun.md)> &#124; [DocumentElement](../../../Enumerations/DocumentElement.md) | The element where the comment will be added. It may be applied to any element which has the AddComment method. |
| sText | Required | String | The comment text. |
| sAuthor | Optional | String | The author's name. Default value is "". |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if the comment was not added.)

## Example

This example adds text and comment to the first paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(oParagraph, "ONLYOFFICE for developers", "Jane");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();
```