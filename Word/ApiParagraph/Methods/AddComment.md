# AddComment

Adds a comment to the current paragraph.💡 Please note that this paragraph must be in the document.

## Syntax

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text (required). |
| sAuthor | Required | string |  | The author's name (optional). |
| sUserId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds a comment to the paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
paragraph.AddComment("comment", "Jane");
```
