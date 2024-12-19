# IntersectWith

Returns a new range as the intersection of the current range with another range. The current range has not changed.

## Syntax

expression.IntersectWith(oRange);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oRange | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range that will be intersected with the current range. |

## Returns

ApiRange, null

## Example

This example returns a new range as the intersection of the current range with another range.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Lorem ipsum dolor sit amet,");
oParagraph.AddText(" consectetuer adipiscing elit,");
oParagraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
var oRangeFirst = oDocument.GetRange(0, 49);
var oRangeSecond = oDocument.GetRange(22, 123);
var oRange = oRangeFirst.IntersectWith(oRangeSecond);
oRange.SetBold(true);
```
