# GetParentMaster

Returns the drawing parent slide master.

## Syntax

```javascript
expression.GetParentMaster();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiMaster](../../ApiMaster/ApiMaster.md) \| null

## Example

This example show how to get the drawing parent slide master.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oMaster.AddObject(oShape);
var oParent = oShape.GetParentMaster();
var sType = oParent.GetClassType();
oSlide.RemoveAllObjects();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type of the shape parent = " + sType);
```
