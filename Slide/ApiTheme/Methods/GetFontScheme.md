# GetFontScheme

Returns the font scheme of the current theme.

## Syntax

expression.GetFontScheme();

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md) &#124; null

## Example

This example shows how to get the font scheme of the theme.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oMaster = oPresentation.GetMaster(0);
var oTheme = oMaster.GetTheme();
var oFontScheme = oTheme.GetFontScheme();
var sType = oFontScheme.GetClassType();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetFontScheme.pptx");
builder.CloseFile();
```