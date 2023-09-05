# GetAllImages

Returns an array with all the image objects from the slide master.

## Syntax

expression.GetAllImages();

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiImage](../../ApiImage/ApiImage.md)>

## Example

This example shows how to get an array with all the image objects from the slide master.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oImage = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oMaster.AddObject(oImage);
var aImages = oMaster.GetAllImages();
var sType = aImages[0].GetClassType();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetAllImages.pptx");
builder.CloseFile();
```