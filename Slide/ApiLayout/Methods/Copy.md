# Copy

Creates a copy of the specified slide layout object. Copies without master slide.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) &#124; null (returns new ApiLayout object that represents the copy of slide layout or null if slide layout doesn't exist)

## Example

This example creastes a copy of slide layout and apply it for other slide.

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
oLayout.AddObject(oShape);
oSlide = Api.CreateSlide();
oPresentation.AddSlide(oSlide);
var oCopyLayout = oLayout.Copy();
oMaster.AddLayout(1, oCopyLayout);
oSlide.ApplyLayout(oCopyLayout);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();
```