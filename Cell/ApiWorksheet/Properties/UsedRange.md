# UsedRange

Returns ApiRange that represents the used range on the specified worksheet. **Read-only**

## Syntax

expression.UsedRange;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

[ApiRange](../../ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents the used range on the specified worksheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oUsedRange = oWorksheet.UsedRange;
oUsedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "UsedRange.xlsx");
builder.CloseFile();
```