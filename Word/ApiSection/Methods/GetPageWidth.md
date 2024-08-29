# GetPageWidth

Gets page width for current section.

## Syntax

expression.GetPageWidth();

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
var nWidth = oSection.GetPageWidth();
oParagraph.AddText("Page width = " + nWidth);
```
