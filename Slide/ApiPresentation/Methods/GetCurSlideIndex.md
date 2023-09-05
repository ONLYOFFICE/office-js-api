# GetCurSlideIndex

Returns the index for the current slide.

## Syntax

expression.GetCurSlideIndex();

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the index for the current slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var nCurrentSlideIndex = oPresentation.GetCurSlideIndex();
oParagraph.AddText("Current Slide Index = " + nCurrentSlideIndex);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetCurSlideIndex.pptx");
builder.CloseFile();
```