# AddComment

Adds a comment to the specifed document element or array of Runs.

## Syntax

```javascript
expression.AddComment(element, text, author, userId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | Required | [ApiRun[]](../../ApiRun/ApiRun.md) | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The element where the comment will be added. It may be applied to any element which has the *AddComment* method. |
| text | Required | string |  | The comment text (required). |
| author | Required | string |  | The author's name (optional). |
| userId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds text and comment to the first paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");
```
