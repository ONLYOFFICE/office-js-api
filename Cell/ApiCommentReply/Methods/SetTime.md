# SetTime

Sets the timestamp of the comment reply creation in the current time zone format.

## Syntax

expression.SetTime(nTimeStamp);

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number &#124; String | The timestamp of the comment reply creation in the current time zone format |

## Returns

This method doesn't return any data.

## Example

This example sets the timestamp of the comment reply creation in the current time zone format.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetTime(Date.now());
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetTime());
builder.SaveFile("xlsx", "SetTime.xlsx");
builder.CloseFile();
```