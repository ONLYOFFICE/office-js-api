# AddComment

Adds a comment to the specifed document element or array of Runs.

## Syntax

expression.AddComment(oElement, sText, sAuthor, sUserId);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | Array.<[ApiRun](../../ApiRun/ApiRun.md)> &#124; [DocumentElement](../../Enumeration/DocumentElement.md) |  | The element where the comment will be added. It may be applied to any element which has the *AddComment* method. |
| sText | Required | string |  | The comment text (required). |
| sAuthor | Required | string |  | The author's name (optional). |
| sUserId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds text and comment to the first paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(oParagraph, "ONLYOFFICE for developers", "Jane");
```
