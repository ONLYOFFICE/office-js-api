# GetClassType

Returns a type of the ApiDrawing class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and pastes it into the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oDrawing);
var aDrawings = oSlide.GetAllDrawings();
var sType = aDrawings[0].GetClassType();
var oDocContent = oDrawing.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class Type = " + sType);
builder.SaveFile("pptx", "GetClassType.pptx");
builder.CloseFile();
```