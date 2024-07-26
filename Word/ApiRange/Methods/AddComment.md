# AddComment

Adds a comment to the current range.

## Syntax

expression.AddComment(sText, sAuthor, sUserId);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text (required). |
| sAuthor | Required | string |  | The author's name (optional). |
| sUserId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds a comment to the range.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Document");
var oRange = oDocument.GetRange(0, 7);
oRange.AddText("ONLYOFFICE ", "before");
oRange.AddText(" Builder", "after");
oRange.AddComment("comment", "John Smith");
```
