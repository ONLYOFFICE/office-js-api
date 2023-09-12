# GetTime

Returns the timestamp of the comment reply creation in the current time zone format.

## Syntax

expression.GetTime();

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the timestamp of the comment reply creation in the current time zone format.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetTime());
builder.SaveFile("xlsx", "GetTime.xlsx");
builder.CloseFile();
```