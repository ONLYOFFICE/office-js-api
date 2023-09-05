# ChangeBgFillStyles

Sets the background fill styles to the current theme format scheme.

## Syntax

expression.ChangeBgFillStyles(arrBgFill);

`expression` - A variable that represents a [ApiThemeFormatScheme](../ApiThemeFormatScheme.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| arrBgFill | Required | Array<[ApiFill](../../ApiFill/ApiFill.md)> | The array of background fill styles must contains 3 elements - subtle, moderate and intense fills. If an array is empty or NoFill elements are in the array, it will be filled with the Api.CreateNoFill() elements. |

## Returns

This method doesn't return any data.

## Example

This example sets the background fill styles to the current theme format scheme.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oTheme = oSlide.GetTheme();
var oFormatScheme = oTheme.GetFormatScheme();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oBgFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oBgFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
var oBgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oFormatScheme.ChangeBgFillStyles([oBgFill1, oBgFill2, oBgFill3]);
var oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117), Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), 
	Api.CreateRGBColor(128, 43, 43), Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222), Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)], "New color scheme");
var oFontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
oTheme = Api.CreateTheme("Theme 1", oMaster, oClrScheme, oFormatScheme, oFontScheme);
oPresentation.ApplyTheme(oTheme);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 20);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
oSlide.AddObject(oChart);
builder.SaveFile("pptx", "ChangeBgFillStyles.pptx");
builder.CloseFile();
```