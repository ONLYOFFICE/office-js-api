# GetAllShapes

Returns an array with all the shape objects from the slide layout.

## Syntax

expression.GetAllShapes();

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiShape](../../ApiShape/ApiShape.md)>

## Example

This example shows how to get an array with all the shape objects from the slide layout.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oSlide.RemoveAllObjects();
oLayout.AddObject(oShape);
var aShapes = oLayout.GetAllShapes();
var oDocContent = aShapes[0].GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("This is a sample shape which was added to the current layout.");
builder.SaveFile("pptx", "GetAllShapes.pptx");
builder.CloseFile();
```