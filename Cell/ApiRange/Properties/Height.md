# Height

Returns a value that represents the range height measured in points. **Read-only**

## Syntax

expression.Height;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

Number

## Example

This example shows how to get a value that represents the range height measured in points.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Worksheet.GetRange("B1").SetValue("Height");
Worksheet.GetRange("C1").SetValue(oWorksheet.GetRange("A1:A3").Height);
builder.SaveFile("xlsx", "Height.xlsx");
builder.CloseFile();
```