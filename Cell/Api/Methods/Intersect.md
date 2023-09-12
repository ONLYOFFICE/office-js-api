# Intersect

Returns the ApiRange object that represents the rectangular intersection of two or more ranges. If one or more ranges from a different worksheet are specified, an error will be returned.

## Syntax

expression.Intersect(Range1, Range2);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Range1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | One of the intersecting ranges. At least two Range objects must be specified. |
| Range2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | One of the intersecting ranges. At least two Range objects must be specified. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null

## Example

This example shows how to get the ApiRange object that represents the rectangular intersection of two or more ranges.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange1 = oWorksheet.GetRange("A1:C5");
var oRange2 = oWorksheet.GetRange("B2:B4");
var oRange = Api.Intersect(oRange1, oRange2);
oRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "Intersect.xlsx");
builder.CloseFile();
```