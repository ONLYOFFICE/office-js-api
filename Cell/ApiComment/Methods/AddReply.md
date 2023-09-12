# AddReply

Adds a reply to a comment.

## Syntax

expression.AddReply(sText, sAuthorName?, sUserId?, nPos?);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment reply text. |
| sAuthorName | Optional | String | The name of the comment reply author. Default value is current user name. |
| sUserId | Optional | String | The user ID of the comment reply author. Default value is current user id. |
| nPos | Optional | Number | The comment reply position. Default value is "ApiComment.GetRepliesCount()". |

## Returns

This method doesn't return any data.

## Example

This example adds a reply to a comment.

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
builder.SaveFile("xlsx", "AddReply.xlsx");
builder.CloseFile();
```