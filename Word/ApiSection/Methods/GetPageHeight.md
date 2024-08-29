# GetPageHeight

Gets page height for current section.

## Syntax

expression.GetPageHeight();

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example



```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
var nHeight = oSection.GetPageHeight();
oParagraph.AddText("Page height = " + nHeight);
```
