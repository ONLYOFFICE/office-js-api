# SetFonts

Sets the fonts to the current theme font scheme.

## Syntax

expression.SetFonts(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs);

`expression` - A variable that represents a [ApiThemeFontScheme](../ApiThemeFontScheme.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| mjLatin | Required | String | The major theme font applied to the latin text. |
| mjEa | Required | String | The major theme font applied to the east asian text. |
| mjCs | Required | String | The major theme font applied to the complex script text. |
| mnLatin | Required | String | The minor theme font applied to the latin text. |
| mnEa | Required | String | The minor theme font applied to the east asian text. |
| mnCs | Required | String | The minor theme font applied to the complex script text. |

## Returns

This method doesn't return any data.

## Example

This example sets the fonts to the current theme font scheme.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oTheme = oMaster.GetTheme();
var oFontScheme = oTheme.GetFontScheme();
oFontScheme.SetFonts("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("New font scheme was set to this slide.");
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetFonts.pptx");
builder.CloseFile();
```