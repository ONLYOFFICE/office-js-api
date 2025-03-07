# GetMaster

Returns the parent slide master of the current layout.

## Syntax

```javascript
expression.GetMaster();
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiMaster](../../ApiMaster/ApiMaster.md)

## Example

This example shows how to get the parent slide master of the current layout.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oLayout = oSlide.GetLayout();
var oMaster = oLayout.GetMaster();
var sType = oMaster.GetClassType();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);
```
