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

This method doesn't return any data.

## Example

This example adds a reply to a comment.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply text: ");
worksheet.GetRange("B3").SetValue(reply.GetText());
```
