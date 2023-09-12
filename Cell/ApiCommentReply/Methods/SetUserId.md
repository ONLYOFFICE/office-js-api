# SetUserId

Sets the user ID to the comment reply author.

## Syntax

expression.SetUserId(sUserId);

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sUserId | Required | String | The user ID of the comment author. |

## Returns

This method doesn't return any data.

## Example

This example sets the user ID to the comment reply author.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetUserId("uid-2");
oWorksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetUserId());
builder.SaveFile("xlsx", "SetUserId.xlsx");
builder.CloseFile();
```