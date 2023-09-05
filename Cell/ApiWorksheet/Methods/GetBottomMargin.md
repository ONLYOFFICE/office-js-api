# GetBottomMargin

Returns the bottom margin of the sheet.

## Syntax

expression.GetBottomMargin();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the bottom margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin + " mm");
builder.SaveFile("xlsx", "GetBottomMargin.xlsx");
builder.CloseFile();
```