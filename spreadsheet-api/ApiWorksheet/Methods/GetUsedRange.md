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
let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
