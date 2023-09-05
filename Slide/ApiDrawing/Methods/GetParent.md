# GetParent

Returns the drawing parent object.

## Syntax

expression.GetParent();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns


[ApiSlide](../../ApiSlide/ApiSlide.md) &#124; [ApiLayout](../../ApiLayout/ApiLayout.md) &#124; [ApiMaster](../../ApiMaster/ApiMaster.md) &#124; null

## Example

This example shows how to get parent.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
var oParent = oShape.GetParent();
var sType = oParent.GetClassType();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type of the shape parent = " + sType);
builder.SaveFile("pptx", "GetParent.pptx");
builder.CloseFile();
```