# GetMastersCount

Returns a number of slide masters.

## Syntax

expression.GetMastersCount();

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of slide masters.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var nMasters = oPresentation.GetMastersCount();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of masters = " + nMasters);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetMastersCount.pptx");
builder.CloseFile();
```