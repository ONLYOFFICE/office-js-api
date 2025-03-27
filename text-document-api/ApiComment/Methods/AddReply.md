# AddReply

Adds a reply to a comment.

## Syntax

```javascript
expression.AddReply(sText, sAuthorName, sUserId, nPos);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | String |  | The comment reply text (required). |
| sAuthorName | Required | String |  | The name of the comment reply author (optional). |
| sUserId | Required | String |  | The user ID of the comment reply author (optional). |
| nPos | Optional | Number | this.GetRepliesCount() | The comment reply position. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds a comment and makes a reply for it.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
```
