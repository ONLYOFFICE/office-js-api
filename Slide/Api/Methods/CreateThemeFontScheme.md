# CreateThemeFontScheme

Creates a new theme font scheme.

## Syntax

expression.CreateThemeFontScheme(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs, sName);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| mjLatin | Required | String | The major theme font applied to the latin text. |
| mjEa | Required | String | The major theme font applied to the east asian text. |
| mjCs | Required | String | The major theme font applied to the complex script text. |
| mnLatin | Required | String | The minor theme font applied to the latin text. |
| mnEa | Required | String | The minor theme font applied to the east asian text. |
| mnCs | Required | String | The minor theme font applied to the complex script text. |
| sName | Required | String | Theme font scheme name. |

## Returns

[ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md)

## Example

This example shows how to create a new theme font scheme.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117), Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), 
	Api.CreateRGBColor(128, 43, 43), Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222), Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)], "New color scheme");
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
var oFontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
var oTheme = Api.CreateTheme("New theme", oMaster, oClrScheme, oFormatScheme, oFontScheme);
oPresentation.ApplyTheme(oTheme);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("This text is written in the Times New Roman font.");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "CreateThemeFontScheme.pptx");
builder.CloseFile();
```