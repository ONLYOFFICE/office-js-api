# AddComment

Adds a comment to the current block content control.
💡 Please note that the current block content control must be in the document.

## Syntax

```javascript
expression.AddComment(text, author, userId);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The comment text (required). |
| author | Required | string |  | The author's name (optional). |
| userId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds comment to the block content control

```javascript
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");
```
