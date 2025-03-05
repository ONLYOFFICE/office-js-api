# Intersect

Returns the ApiRange object that represents the rectangular intersection of two or more ranges. If one or more ranges from a different worksheet are specified, an error will be returned.

## Syntax

```javascript
expression.Intersect(Range1, Range2);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | One of the intersecting ranges. At least two Range objects must be specified. |
| Range2 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | One of the intersecting ranges. At least two Range objects must be specified. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to get the ApiRange object that represents the rectangular intersection of two or more ranges.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range1 = worksheet.GetRange("A1:C5");
let range2 = worksheet.GetRange("B2:B4");
let range = Api.Intersect(range1, range2);
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
