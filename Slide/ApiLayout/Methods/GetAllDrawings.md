# GetAllDrawings

Returns an array with all the drawing objects from the slide layout.

## Syntax

expression.GetAllDrawings();

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiDrawing](../../ApiDrawing/ApiDrawing.md)>

## Example

This example shows how to get an array with all the drawing objects from the slide layout.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
oSlide.RemoveAllObjects();
oLayout.AddObject(oDrawing);
var aDrawings = oLayout.GetAllDrawings();
var oPlaceholder = Api.CreatePlaceholder("picture");
aDrawings[0].SetPlaceholder(oPlaceholder);
builder.SaveFile("pptx", "GetAllDrawings.pptx");
builder.CloseFile();
```