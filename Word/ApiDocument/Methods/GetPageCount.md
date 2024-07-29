# GetPageCount

Returns a number of pages in the current document.💡 This method can be slow for large documents because it runs the document calculationprocess before the full recalculation.

## Syntax

expression.GetPageCount();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a number of pages in the current document.

```javascript
var oDocument = Api.GetDocument();
var sPageCount = oDocument.GetPageCount();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Number of pages: " + sPageCount);
```
