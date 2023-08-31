# AddComment

Adds a comment to the specifed document element or array of Runs.

## Syntax

expression.AddComment(oElement, sText, sAuthor?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | Array of [ApiRun](../../ApiRun/ApiRun.md) or DocumentElement | The element where the comment will be added. It may be applied to any element which has the AddComment method. |
| sText | Required | String | The comment text. |
| sAuthor | Optional | String | The author's name. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

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