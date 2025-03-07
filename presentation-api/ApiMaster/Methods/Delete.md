# Delete

Deletes the specified object from the parent if it exists.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the specified object from the parent if it exists.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nCountBefore = oPresentation.GetMastersCount();
oMaster.Delete();
var nCountAfter = oPresentation.GetMastersCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of masters before deletion: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of masters after deletion: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
```
