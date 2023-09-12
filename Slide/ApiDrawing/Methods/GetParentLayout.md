# GetParentLayout

Returns the drawing parent slide layout.

## Syntax

expression.GetParentLayout();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) &#124; null (return null if parent ins't a slide layout)

## Example

This example shows hot to get the drawing parent slide layout.

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
var oParent = oShape.GetParentLayout();
var sType = oParent.GetClassType();
oSlide.RemoveAllObjects();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type of the shape parent = " + sType);
builder.SaveFile("pptx", "GetParentLayout.pptx");
builder.CloseFile();
```