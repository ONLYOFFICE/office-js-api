# GetStartPageNumber

Returns the start page number of the specified section.

## Syntax

expression.GetStartPageNumber();

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets a start page index of section

```javascript
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
let oSection = oParagraph.GetSection();
oSection.SetStartPageNumber(5);
let nStartPageNumber = oSection.GetStartPageNumber();
oParagraph.AddText("The start page number for this section is: " + nStartPageNumber);
let oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();
oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();
```
