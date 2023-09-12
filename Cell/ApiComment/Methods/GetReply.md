# GetReply

Returns the specified comment reply.

## Syntax

expression.GetReply(nIndex?);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nIndex | Optional | Number | The comment reply index. Default value is "0". |

## Returns

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md) &#124; null (returns null if nIndex isn't correct or reply with this such index doesn't exist)

## Example

This example shows how to get the specified comment reply.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oWorksheet.GetRange("A3").SetValue("Comment's reply text: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetText());
builder.SaveFile("xlsx", "GetReply.xlsx");
builder.CloseFile();
```