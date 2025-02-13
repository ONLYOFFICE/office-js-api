# GetClassType

Returns the type of the ApiShape class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"shape"

## Example

This example gets a class type and pastes it into the presentation.

```javascript
var oPresentation = Api.GetPresentation();
oPresentation.SetSizes(254 * 36000, 190 * 36000);
var oSlide = oPresentation.GetCurrentSlide();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var sClassType = oShape.GetClassType();
oParagraph.AddText("Class Type = " + sClassType);
oSlide.AddObject(oShape);
```
