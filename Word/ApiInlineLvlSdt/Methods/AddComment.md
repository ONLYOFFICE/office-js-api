# AddComment

Adds a comment to the current inline content control.
💡 Please note that this inline content control must be in the document.

## Syntax

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text (required). |
| sAuthor | Required | string |  | The author's name (optional). |
| sUserId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds a comment to the inline content control.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddComment("comment", "John Smith");
```
