# GetLeftMargin

Returns the left margin of the sheet.

## Syntax

expression.GetLeftMargin();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the left margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");
builder.SaveFile("xlsx", "GetLeftMargin.xlsx");
builder.CloseFile();
```