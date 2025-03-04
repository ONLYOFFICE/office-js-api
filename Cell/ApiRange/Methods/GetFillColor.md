# GetFillColor

Returns the background color for the current cell range. Returns 'No Fill' when the color of the background in the cell / cell range is null.

## Syntax

```javascript
expression.GetFillColor();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill'

## Example

This example shows how to get the background color for the cell range.

```javascript editor-xlsx
// How to find out a range background color.

// Get a range get, set its background color using RGB value and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 60);
var oRange = oWorksheet.GetRange("A1");
oRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
oRange.SetValue("This is the cell with a color set to its background.");
var oFillColor = oRange.GetFillColor();
oWorksheet.GetRange("A3").SetValue("This is another cell with the same color set to its background");
oWorksheet.GetRange("A3").SetFillColor(oFillColor);
```
