# Copy

Creates a copy of the current theme format scheme.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiThemeFormatScheme](../ApiThemeFormatScheme.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiThemeFormatScheme](../ApiThemeFormatScheme.md)

## Example

This example creates a copy of the current theme format scheme.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oMaster = oPresentation.GetMaster(0);
var oSlide1 = oPresentation.GetSlideByIndex(0);
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
var oFormatScheme = Api.CreateThemeFormatScheme([oFill1, oFill2, oFill3], [oBgFill1, oBgFill2, oBgFill3], [oStroke1, oStroke2, oStroke3], "New format scheme");
var oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117), Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), 
	Api.CreateRGBColor(128, 43, 43), Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222), Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)], "New color scheme");
var oFontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
var oTheme1 = Api.CreateTheme("Theme 1", oMaster, oClrScheme, oFormatScheme, oFontScheme);
oPresentation.ApplyTheme(oTheme1);
var oSlide2 = Api.CreateSlide();
oPresentation.AddSlide(oSlide2);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 218, 185), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(238, 203, 173), 100000);
var oNewBgFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oNewBgFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(238, 203, 173), Api.CreateRGBColor(51, 51, 51));
var oNewBgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(238, 203, 173));
var oCopyFormatScheme = oFormatScheme.Copy();
oCopyFormatScheme.ChangeBgFillStyles([oNewBgFill1, oNewBgFill2, oNewBgFill3]);
var oTheme2 = Api.CreateTheme("Theme 2", oMaster, oClrScheme, oCopyFormatScheme, oFontScheme);
oSlide2.ApplyTheme(oTheme2);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();
```