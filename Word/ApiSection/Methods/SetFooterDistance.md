# SetFooterDistance

Specifies the distance from the bottom edge of the page to the bottom edge of the footer.

## Syntax

expression.SetFooterDistance(nDistance);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nDistance | Required | [twips](../../../Enumerations/twips.md)  | The distance from the bottom edge of the page to the bottom edge of the footer measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies the distance from the bottom edge of the page to the bottom edge of the footer.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
var oSection = oDocument.GetFinalSection();
var oFooter = oSection.GetFooter("default", true);
oSection.SetFooterDistance(1440);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is a page footer. ");
oParagraph.AddText("The distance from the page bottom to the footer is 1 inch (1440 twentieths of a point).");
builder.SaveFile("docx", "SetFooterDistance.docx");
builder.CloseFile();
```