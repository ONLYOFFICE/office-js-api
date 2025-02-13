# GetVisible

Returns the visibility of the current presentation slide.

## Syntax

```javascript
expression.GetVisible();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example



```javascript
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
oSlide = oPresentation.GetSlideByIndex(0);
oSlide.SetVisible(false);
var bVisible = oSlide.GetVisible();
oSlide = oPresentation.GetSlideByIndex(1);
oSlide.RemoveAllObjects();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oShape);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("The first slide visibility: " + bVisible);
```
