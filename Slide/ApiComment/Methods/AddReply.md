# AddReply

Adds a reply to a comment.

## Syntax

expression.AddReply(sText, sAuthorName, sUserId, nPos);

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