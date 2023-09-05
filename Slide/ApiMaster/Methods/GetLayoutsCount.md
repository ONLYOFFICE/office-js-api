# GetLayoutsCount

Returns a number of layout objects.

## Syntax

expression.GetLayoutsCount() 

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example gets a number of layout objects and insert it itno the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nLayouts = oMaster.GetLayoutsCount();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of layouts = " + nLayouts);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetLayoutsCount.pptx");
builder.CloseFile();
```