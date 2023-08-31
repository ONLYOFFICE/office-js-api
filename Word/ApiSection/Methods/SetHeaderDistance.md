# SetHeaderDistance

Specifies the distance from the top edge of the page to the top edge of the header.

## Syntax

expression.SetHeaderDistance(nDistance);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nDistance | Required | [twips](../../../Enumerations/twips.md)  | The distance from the top edge of the page to the top edge of the header measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies the distance from the top edge of the page to the top edge of the header.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a header. ");
oParagraph.AddText("Scroll down the page to see it.");
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
oSection.SetHeaderDistance(1440);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is a page header. ");
oParagraph.AddText("The distance from the page top to the header is 1 inch (1440 twentieths of a point).");
builder.SaveFile("docx", "SetHeaderDistance.docx");
builder.CloseFile();
```