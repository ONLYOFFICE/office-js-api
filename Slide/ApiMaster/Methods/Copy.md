# Copy

Creates a copy of the specified slide master object.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiMaster](../../ApiMaster/ApiMaster.md) | null

## Example

This example shows how to creates a copy of the specified slide master object.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nCountBefore = oPresentation.GetMastersCount();
var oCopyMaster = oMaster.Copy();
oPresentation.AddMaster(1, oCopyMaster);
var nCountAfter = oPresentation.GetMastersCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of masters before adding the copied master: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of masters after adding the copied master: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
```
