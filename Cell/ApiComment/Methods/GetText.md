# GetText

Returns the comment text.

## Syntax

expression.GetText();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the comment text.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment: ");
oWorksheet.GetRange("B3").SetValue(oRange.GetComment().GetText());
builder.SaveFile("xlsx", "GetText.xlsx");
builder.CloseFile();
```