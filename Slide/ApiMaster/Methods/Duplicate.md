# Duplicate

Creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection.

## Syntax

expression.Duplicate(nPos);

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiPresentation.GetMastersCount() | Position where the new slide master will be added. |

## Returns

[ApiMaster](../../ApiMaster/ApiMaster.md) | null

## Example

This example creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nCountBefore = oPresentation.GetMastersCount();
oMaster.Duplicate(1);
var nCountAfter = oPresentation.GetMastersCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of masters before duplicating: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of masters after duplicating: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
```
