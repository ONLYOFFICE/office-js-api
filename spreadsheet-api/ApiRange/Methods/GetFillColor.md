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
let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 60);
let range = worksheet.GetRange("A1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
range.SetValue("This is the cell with a color set to its background.");
let fillColor = range.GetFillColor();
worksheet.GetRange("A3").SetValue("This is another cell with the same color set to its background");
worksheet.GetRange("A3").SetFillColor(fillColor);
```
