# GetClassType

Returns the type of the ApiImage class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"image"

## Example

This example gets a class type and pastes it into the presentation.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oImage = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/step2_1.png", 100 * 36000, 50 * 36000);
oSlide.AddObject(oImage);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var sClassType = oImage.GetClassType();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class Type = " + sClassType);
oSlide.AddObject(oShape);
```
