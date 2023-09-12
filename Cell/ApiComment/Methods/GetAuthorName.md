# GetAuthorName

Returns the comment author's name.

## Syntax

expression.GetAuthorName();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the comment author's name.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's author: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetAuthorName());
builder.SaveFile("xlsx", "GetAuthorName.xlsx");
builder.CloseFile();
```