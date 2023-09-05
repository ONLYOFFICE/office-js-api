# GetSlidesCount

Returns a number of slides.

## Syntax

expression.GetSlidesCount();

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of slides.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide1 = oPresentation.GetSlideByIndex(0);
var oSlide2 = Api.CreateSlide();
oPresentation.AddSlide(oSlide2);
var nSlides = oPresentation.GetSlidesCount();
oSlide1.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of slides = " + nSlides);
oSlide1.AddObject(oShape);
builder.SaveFile("pptx", "GetSlidesCount.pptx");
builder.CloseFile();
```