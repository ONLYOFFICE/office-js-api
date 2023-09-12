# GetTime

Returns the timestamp of the comment creation in the current time zone format.

## Syntax

expression.GetTime();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the timestamp of the comment creation in the current time zone format.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Timestamp: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetTime());
builder.SaveFile("xlsx", "GetTime.xlsx");
builder.CloseFile();
```