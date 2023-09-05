# GetTopMargin

Returns the top margin of the sheet.

## Syntax

expression.GetTopMargin();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the top margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + nTopMargin + " mm");
builder.SaveFile("xlsx", "GetTopMargin.xlsx");
builder.CloseFile();
```