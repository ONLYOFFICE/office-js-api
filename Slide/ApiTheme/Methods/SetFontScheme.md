# SetFontScheme

Sets the font scheme to the current presentation theme.

## Syntax

expression.SetFontScheme(oApiFontScheme);

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiFontScheme | Required | [ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md) | Theme font scheme. |

## Returns

Boolean (return false if font scheme doesn't exist)

## Example

This example sets the font scheme to the current presentation theme.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oFontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
var oTheme = oSlide.GetTheme();
oTheme.SetFontScheme(oFontScheme);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
oDocContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("This is an example of a paragraph with a new font scheme set.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetFontScheme.pptx");
builder.CloseFile();
```