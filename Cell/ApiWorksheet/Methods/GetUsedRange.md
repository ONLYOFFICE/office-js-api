# GetUsedRange

Returns the ApiRange object that represents the used range on the specified worksheet.

## Syntax

expression.GetUsedRange();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents the used range on the specified worksheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oUsedRange = oWorksheet.GetUsedRange();
oUsedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetUsedRange.xlsx");
builder.CloseFile();
```