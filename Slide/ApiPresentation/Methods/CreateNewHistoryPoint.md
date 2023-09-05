# CreateNewHistoryPoint

Creates a new history point.

## Syntax

expression.CreateNewHistoryPoint();

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example creates a new history point.

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
oParagraph.AddText("This is just a sample text.");
oPresentation.CreateNewHistoryPoint();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("New history point was just created.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "CreateNewHistoryPoint.pptx");
builder.CloseFile();
```