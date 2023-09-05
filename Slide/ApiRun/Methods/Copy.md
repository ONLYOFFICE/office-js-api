# Copy

Creates a copy of the current run.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../ApiRun.md)

## Example

This example reates a copy of the run.

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
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text that was copied. ");
oParagraph.AddElement(oRun);
var oCopyRun = oRun.Copy();
oParagraph.AddElement(oCopyRun);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();
```