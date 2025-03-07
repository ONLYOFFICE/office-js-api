# RemoveReplies

Removes the specified comment replies.

## Syntax

```javascript
expression.RemoveReplies(nPos, nCount, bRemoveAll);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | 0 | The position of the first comment reply to remove. |
| nCount | Optional | Number | 1 | A number of comment replies to remove. |
| bRemoveAll | Optional | boolean | false | Specifies whether to remove all comment replies or not. |

## Returns

This method doesn't return any data.

## Example

This example removes the specified comment replies.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
comment.AddReply("Reply 2", "John Smith", "uid-1");
comment.RemoveReplies(0, 1, false);
worksheet.GetRange("A3").SetValue("Comment replies count: ");
worksheet.GetRange("B3").SetValue(comment.GetRepliesCount());
```
