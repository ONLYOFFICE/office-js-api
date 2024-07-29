# GetPrevious

Returns the previous section if exists.

## Syntax

expression.GetPrevious();

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiSection, null

## Example

This example shows how to get the previous section.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("Scroll down to see the new section.");
var oSection1 = oDocument.CreateSection(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph in the first section");
oDocument.Push(oParagraph);
var oSection2 = oDocument.CreateSection(oParagraph);
var oPreviousSection = oSection2.GetPrevious();
oPreviousSection.SetPageMargins(7200, 2880, 1440, 5760);
```
