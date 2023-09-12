# GetClassType

Returns a type of the ApiComment class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

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
oRange.AddComment("This is just a number.");
var oComment = oRange.GetComment();
var sType = oComment.GetClassType();
oWorksheet.GetRange("A3").SetValue("Type: " + sType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
```