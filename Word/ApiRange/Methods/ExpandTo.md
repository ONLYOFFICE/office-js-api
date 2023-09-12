# ExpandTo

Returns a new range that goes beyond the specified range in any direction and spans a different range. The current range has not changed. Throws an error if two ranges do not have a union.

## Syntax

expression.ExpandTo(oRange);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oRange | Required | [ApiRange](../ApiRange.md) | The range that will be expanded. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if the specified range can't be expanded)

## Example

This example returns a new range that goes beyond the specified range in any direction and spans a different range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Lorem ipsum dolor sit amet,");
oParagraph.AddText(" consectetuer adipiscing elit,");
oParagraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
var oRangeFirst = oDocument.GetRange(0, 22);
var oRangeSecond = oDocument.GetRange(49, 123);
var oRange = oRangeFirst.ExpandTo(oRangeSecond);
oRange.SetItalic(true);
builder.SaveFile("docx", "ExpandTo.docx");
builder.CloseFile();
```