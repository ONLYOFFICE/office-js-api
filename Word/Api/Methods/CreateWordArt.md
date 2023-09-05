# CreateWordArt

Creates a Text Art object with the parameters specified.

## Syntax

expression.CreateWordArt(oTextPr?, sText?, sTransform?, oFill?, oStroke?, nRotAngle?, nWidth?, nHeight?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Optional | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The text properties. Default value is Api.CreateTextPr(). Default value is "Api.CreateTextPr()"|
| sText | Optional | String | The text for the Text Art object. Default value is "Your text here". Default value is "Your text here"|
| sTransform | Optional | [TextTransform](../../../Enumerations/TextTransform.md) | Text transform type. Default value is "textNoShape". Default value is "textNoShape"|
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the Text Art object. Default value is Api.CreateNoFill(). Default value is "Api.CreateNoFill()"|
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the Text Art object shadow. Default value is Api.CreateStroke(0, Api.CreateNoFill()). Default value is "Api.CreateStroke(0, Api.CreateNoFill())"|
| nRotAngle | Optional | Number | Rotation angle. Default value is 0. Default value is "0"|
| nWidth | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art width measured in English measure units. Default value is 1828800. Default value is "1828800"|
| nHeight | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art heigth measured in English measure units. Default value is 1828800. Default value is "1828800"|

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example creates a Text Art object with the "textArchUp" text transform type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTextPr.SetCaps(true);
oTextPr.SetColor(51, 51, 51, false);
oTextPr.SetFontFamily("Comic Sans MS");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
var oTextArt = Api.CreateWordArt(oTextPr, "onlyoffice", "textArchUp", oFill, oStroke, 0, 150 * 36000, 50 * 36000);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oTextArt);
builder.SaveFile("docx", "CreateWordArt.docx");
builder.CloseFile();
```