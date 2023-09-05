# GetRightMargin

Returns the right margin of the sheet.

## Syntax

expression.GetRightMargin();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the right margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: " + nRightMargin + " mm");
builder.SaveFile("xlsx", "GetRightMargin.xlsx");
builder.CloseFile();
```