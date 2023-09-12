# GetClassType

Returns a type of the ApiCommentReply class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and inserts it into the table.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
var sType = oReply.GetClassType();
oWorksheet.GetRange("A3").SetValue("Type: " + sType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
```