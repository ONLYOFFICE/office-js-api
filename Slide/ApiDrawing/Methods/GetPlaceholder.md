# GetPlaceholder

Returns a placeholder from the current drawing object.

## Syntax

expression.GetPlaceholder();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md) &#124; null (returns null if placeholder doesn't exist)


## Example

This example shows how to get a placeholder from the current drawing object.

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
var oPlaceholder = Api.CreatePlaceholder("chart");
oShape.SetPlaceholder(oPlaceholder);
oSlide.AddObject(oShape);
oPlaceholder = oShape.GetPlaceholder();
var sType = oPlaceholder.GetClassType();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type of the element from the shape = " + sType);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetPlaceholder.pptx");
builder.CloseFile();
```