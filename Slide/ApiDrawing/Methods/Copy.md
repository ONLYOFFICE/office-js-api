# Copy

Creates a copy of the specified drawing object.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) &#124; null (return null if drawing doesn't exist)

## Example

This example creates a copy of a shape and inserts it into the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oShape);
var oCopyShape = oShape.Copy();
oSlide = Api.CreateSlide();
oPresentation.AddSlide(oSlide);
oSlide.AddObject(oCopyShape);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();
```