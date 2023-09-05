# Copy

Creates a copy of the current theme font scheme.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiThemeFontScheme](../ApiThemeFontScheme.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiThemeFontScheme](../ApiThemeFontScheme.md)

## Example

This example creates a copy of the theme font scheme.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide1 = oPresentation.GetSlideByIndex(0);
oSlide1.RemoveAllObjects();
var oMaster = oPresentation.GetMaster(0);
var oTheme1 = oMaster.GetTheme();
var oFontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
oTheme1.SetFontScheme(oFontScheme);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("New font scheme was set to this slide.");
oSlide1.AddObject(oShape);
var oCopyFontScheme = oFontScheme.Copy();
oSlide1.ApplyTheme(oTheme1);
var oSlide2 = Api.CreateSlide();
oSlide2.RemoveAllObjects();
oPresentation.AddSlide(oSlide2);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oBgFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke1 = Api.CreateStroke(1 * 36000, oFill1);
var oFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
var oBgFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
var oStroke2 = Api.CreateStroke(1 * 36000, oFill2);
var oFill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oBgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke3 = Api.CreateStroke(1 * 36000, oFill3);
oFormatScheme = Api.CreateThemeFormatScheme([oFill1, oFill2, oFill3], [oBgFill1, oBgFill2, oBgFill3], [oStroke1, oStroke2, oStroke3], "New format scheme");
var oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117), Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), 
	Api.CreateRGBColor(128, 43, 43), Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222), Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)], "New color scheme");
var oTheme2 = Api.CreateTheme("New theme", oMaster, oClrScheme, oFormatScheme, oCopyFontScheme);
oSlide2.ApplyTheme(oTheme2);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("New font scheme was set to this slide.");
oSlide2.AddObject(oShape);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();
```