# GetSection

Returns the paragraph section.

## Syntax

expression.GetSection();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSection](../../ApiSection/ApiSection.md)

## Example

This example shows how to get the paragraph section.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
var oSection = oParagraph.GetSection();
oSection.SetPageSize(7200, 4320);
```
