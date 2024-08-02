# RemoveReplies

Removes the specified comment replies.

## Syntax

expression.RemoveReplies(nPos, nCount, bRemoveAll);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | false | The position of the first comment reply to remove. |
| nCount | Optional | Number | true | A number of comment replies to remove. |
| bRemoveAll | Optional | boolean | false | Specifies whether to remove all comment replies or not. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)