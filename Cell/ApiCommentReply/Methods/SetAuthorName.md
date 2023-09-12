# SetAuthorName

Sets the comment reply author's name.

## Syntax

expression.SetAuthorName(sAuthorName);

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | String | The comment reply author's name. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment reply author's name.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetAuthorName("Mark Potato");
oWorksheet.GetRange("A3").SetValue("Comment's reply author: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetAuthorName());
builder.SaveFile("xlsx", "SetAuthorName.xlsx");
builder.CloseFile();
```