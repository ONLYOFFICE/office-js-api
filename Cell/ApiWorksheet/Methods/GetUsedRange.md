# GetUsedRange

Returns the ApiRange object that represents the used range on the specified worksheet.

## Syntax

```javascript
expression.GetUsedRange();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents the used range on the specified worksheet.

```javascript editor-xlsx
// How to get used ranges from the worksheet.

// Get used ranges and fill it with color.

var oWorksheet = Api.GetActiveSheet();
var oUsedRange = oWorksheet.GetUsedRange();
oUsedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
