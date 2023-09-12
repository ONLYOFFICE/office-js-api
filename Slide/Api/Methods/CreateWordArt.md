# CreateWordArt

Creates a Text Art object with the parameters specified.

## Syntax

expression.CreateWordArt(oTextPr?, sText?, sTransform?, oFill?, oStroke?, nRotAngle?, nWidth?, nHeight?, nIndLeft?, nIndTop?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Optional | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The text properties. Default value is "Api.CreateTextPr()". |
| sText | Optional | String | The text for the Text Art object. Default value is "Your text here". |
| sTransform | Optional | [TextTransform](../../../Enumerations/TextTransform.md) | Text transform type. Default value is "textNoShape". |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the Text Art object. Default value is "Api.CreateNoFill()". |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the Text Art object shadow. Default value is "Api.CreateStroke(0, Api.CreateNoFill())". |
| nRotAngle | Optional | Number | Rotation angle. Default value is "0". |
| nWidth | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art width measured in English measure units. Default value is "1828800". |
| nHeight | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art heigth measured in English measure units. Default value is "1828800". |
| nIndLeft | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art left side indentation value measured in English measure units. Default value is "ApiPresentation.GetWidth() / 2". |
| nIndTop | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art top side indentation value measured in English measure units. Default value is "ApiPresentation.GetHeight() / 2". |


## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example creates a Text Art object with the "textArchUp" text transform type.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(72);
oTextPr.SetBold(true);
oTextPr.SetCaps(true);
oTextPr.SetColor(51, 51, 51, false);
oTextPr.SetFontFamily("Comic Sans MS");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
var oTextArt = Api.CreateWordArt(oTextPr, "onlyoffice", "textArchUp", oFill, oStroke, 0, 100 * 36000, 30 * 36000);
oSlide.AddObject(oTextArt);
builder.SaveFile("pptx", "CreateWordArt.pptx");
builder.CloseFile();
```