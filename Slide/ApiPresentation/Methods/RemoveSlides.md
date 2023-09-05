# RemoveSlides

Removes a range of slides from the presentation. Deletes all the slides from the presentation if no parameters are specified.

## Syntax

expression.RemoveSlides(nStart?, nCount?);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nStart | Optional | Number | The starting position for the deletion range. Default value is "0". |
| nCount | Optional | Number | The number of slides to delete. Default value is "ApiPresentation.GetSlidesCount()". |

## Returns

Boolean

## Example

This example shows how to remove a range of slides from the presentation.

```javascript
builder.CreateFile("pptx");
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
builder.SaveFile("pptx", "RemoveSlides.pptx");
builder.CloseFile();
```