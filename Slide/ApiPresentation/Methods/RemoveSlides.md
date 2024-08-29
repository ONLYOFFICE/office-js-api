# RemoveSlides

Removes a range of slides from the presentation.
Deletes all the slides from the presentation if no parameters are specified.

## Syntax

expression.RemoveSlides(nStart, nCount);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStart | Optional | Number | false | The starting position for the deletion range. |
| nCount | Optional | Number | ApiPresentation.GetSlidesCount() | The number of slides to delete. |

## Returns

boolean

## Example

This example shows how to remove a range of slides from the presentation.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
oPresentation.RemoveSlides(0, 1);
oSlide.RemoveAllObjects();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var sClassType = oPresentation.GetClassType();
oParagraph.AddText("A slide with no background was removed from this presentation.");
oSlide.AddObject(oShape);
```
