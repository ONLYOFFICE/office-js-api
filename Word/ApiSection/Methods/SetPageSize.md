# SetPageSize

Specifies the properties (size and orientation) for all the pages in the current section.

## Syntax

expression.SetPageSize(nWidth, nHeight, isPortrait);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | twips |  | The page width measured in twentieths of a point (1/1440 of an inch). |
| nHeight | Required | twips |  | The page height measured in twentieths of a point (1/1440 of an inch). |
| isPortrait | Optional | boolean | false | Specifies the orientation of all the pages in this section (if set to true, then the portrait orientation is chosen). |

## Returns

This method doesn't return any data.

## Example

This example sSpecifies the properties (size and orientation) for all the pages in the section.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a page size set. ");
oParagraph.AddText("The page width is 5 inches (7200 twentieths of a point). ");
oParagraph.AddText("The page height is 3 inches (4320 twentieths of a point). ");
oParagraph.AddText("The font size is default (11 points).");
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(720, 720, 720, 720);
oSection.SetPageSize(7200, 4320);
```
