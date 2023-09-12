# IsSolved

Checks if a comment is solved or not.

## Syntax

expression.IsSolved();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if a comment is solved or not.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment is solved: ");
oWorksheet.GetRange("B3").SetValue(oComment.IsSolved());
builder.SaveFile("xlsx", "IsSolved.xlsx");
builder.CloseFile();
```