# RemoveReplies

Removes the specified comment replies.

## Syntax

expression.RemoveReplies(nPos?, nCount?, bRemoveAll?);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | The position of the first comment reply to remove. Default value is "0". |
| nCount | Optional | Number | A number of comment replies to remove. Default value is "1". |
| bRemoveAll | Optional | Boolean | Specifies whether to remove all comment replies or not. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example removes the specified comment replies.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
oComment.AddReply("Reply 2", "John Smith", "uid-1");
oComment.RemoveReplies(0, 1, false);
oWorksheet.GetRange("A3").SetValue("Comment replies count: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetRepliesCount());
builder.SaveFile("xlsx", "RemoveReplies.xlsx");
builder.CloseFile();
```