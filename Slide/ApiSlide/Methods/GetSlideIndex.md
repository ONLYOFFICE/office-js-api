# GetSlideIndex

Returns a position of the current slide in the presentation.

## Syntax

expression.GetSlideIndex();

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number (returns -1 if slide doesn't exist or is not in the presentation)

## Example

This example shows how to get a position of the current slide in the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var nIndex = oSlide.GetSlideIndex();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Slide index = " + nIndex);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetSlideIndex.pptx");
builder.CloseFile();
```