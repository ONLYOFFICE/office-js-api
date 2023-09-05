# Cols

Returns the ApiRange object that represents the columns of the specified range. **Read-only**

## Syntax

expression.Cols;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiRange](../ApiRange.md)

## Example

This example shows how to get a Range object that represents the columns in the specified range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.Cols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "Cols.xlsx");
builder.CloseFile();
```