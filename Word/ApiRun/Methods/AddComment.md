# AddComment

Adds a comment to the current run.
💡 Please note that this run must be in the document.

## Syntax

expression.AddComment(sText, sAuthor, sUserId);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text (required). |
| sAuthor | Required | string |  | The author's name (optional). |
| sUserId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds a comment to the run.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. Nothing special.");
oParagraph.AddElement(oRun);
oRun.AddComment("comment", "John Smith");
```
