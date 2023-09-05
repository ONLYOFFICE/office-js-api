# Width

Returns a value that represents the range width measured in points. **Read-only**

## Syntax

expression.Width;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

Number

## Example

This example shows how to get a value that represents the range width measured in points.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Worksheet.GetRange("A2").SetValue("Width");
Worksheet.GetRange("B2").SetValue(oWorksheet.GetRange("A1:C1").Width);
builder.SaveFile("xlsx", "Width.xlsx");
builder.CloseFile();
```