# IntersectWith

Returns a new range as the intersection of the current range with another range. The current range has not changed. Throws an error if two ranges do not overlap or are not adjacent.

## Syntax

expression.IntersectWith(oRange);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oRange | Required | [ApiRange](../ApiRange.md) | The range that will be intersected with the current range. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't intersect)

## Example

This example returns a new range as the intersection of the current range with another range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Lorem ipsum dolor sit amet,");
oParagraph.AddText(" consectetuer adipiscing elit,");
oParagraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
var oRangeFirst = oDocument.GetRange(0, 49);
var oRangeSecond = oDocument.GetRange(22, 123);
var oRange = oRangeFirst.IntersectWith(oRangeSecond);
oRange.SetBold(true);
builder.SaveFile("docx", "IntersectWith.docx");
builder.CloseFile();
```