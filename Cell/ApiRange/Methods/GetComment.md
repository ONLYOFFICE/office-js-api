# GetComment

Returns the ApiComment object of the current range.

## Syntax

expression.GetComment();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if range does not consist of one cell)

## Example

This example shows how to get the ApiComment object of the range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment: " + oRange.GetComment().GetText());
builder.SaveFile("xlsx", "GetComment.xlsx");
builder.CloseFile();
```