# GetAreas

Returns a collection of the ranges.

## Syntax

```javascript
expression.GetAreas();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiAreas](../../ApiAreas/ApiAreas.md)

## Example

This example shows how to get a collection of the ranges.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange("A5");
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange("B5").SetValue(count);
```
