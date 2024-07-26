# AddComment

Adds a comment to the document.

## Syntax

expression.AddComment(sText, sAuthor, sUserId);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text (required). |
| sAuthor | Required | string |  | The author's name (optional). |
| sUserId | Required | string |  | The user ID of the comment author (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds a comment to the document.

```javascript
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oParagraph.AddLineBreak();
oParagraph.AddText("The comment was added to this document.");
oDocument.AddComment("This is a comment to the document.", "Jane");
```
