# GetComments

Returns an array of ApiComment objects.

## Syntax

expression.GetComments();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiComment](../../ApiComment/ApiComment.md)>

## Example

This example shows how to get an array of ApiComment objects.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var aComments = oWorksheet.GetComments();
oWorksheet.GetRange("A4").SetValue("Comment: " + aComments[0].GetText());
builder.SaveFile("xlsx", "GetComments.xlsx");
builder.CloseFile();
```