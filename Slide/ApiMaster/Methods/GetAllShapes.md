# GetAllShapes

Returns an array with all the shape objects from the slide master.

## Syntax

expression.GetAllShapes();

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiShape](../../ApiShape/ApiShape.md)>

## Example

This example shows how to get an array with all the shape objects from the slide master.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oMaster.AddObject(oShape);
var aShapes = oMaster.GetAllShapes();
var sType = aShapes[0].GetClassType();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oShape.SetVerticalTextAlign("center");
builder.SaveFile("pptx", "GetAllShapes.pptx");
builder.CloseFile();
```