# CreateThemeFormatScheme

Creates a new theme format scheme.

## Syntax

expression.CreateThemeFormatScheme(arrFill, arrBgFill, arrLine, sName);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| arrFill | Required | Array<[ApiFill](../../ApiFill/ApiFill.md)> | This array contains the fill styles. It should be consist of subtle, moderate and intense fills. |
| arrBgFill | Required | Array<[ApiFill](../../ApiFill/ApiFill.md)> | This array contains the background fill styles. It should be consist of subtle, moderate and intense fills. |
| arrLine | Required | Array<[ApiStroke](../../ApiStroke/ApiStroke.md)> | This array contains the line styles. It should be consist of subtle, moderate and intense lines. |
| sName | Required | String | Theme format scheme name. |

## Returns

[ApiThemeFormatScheme](../../ApiThemeFormatScheme/ApiThemeFormatScheme.md) &#124; null

## Example

This example shows how to create a new theme format scheme.

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
builder.SaveFile("pptx", "CreateThemeFormatScheme.pptx");
builder.CloseFile();
```