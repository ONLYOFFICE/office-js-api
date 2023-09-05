# AddWordArt

Adds a Text Art object to the current sheet with the parameters specified.

## Syntax

expression.AddWordArt(oTextPr?, sText?, sTransform?, oFill?, oStroke?, nRotAngle?, nWidth?, nHeight?, nFromCol?, nFromRow?, nColOffset?, nRowOffset?);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Optional | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The text properties. Default value is "Api.CreateTextPr()". |
| sText | Optional | String | The text for the Text Art object. Default value is "Your text here". |
| sTransform | Optional | [TextTransform](../../../Enumerations/TextTransform.md) | Text transform type. Default value is "textNoShape". |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the Text Art object. Default value is "Api.CreateNoFill()". |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the Text Art object shadow. |
| nRotAngle | Optional | Number | Rotation angle. Default value is "Api.CreateStroke(0, Api.CreateNoFill())". |
| nWidth | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art width measured in English measure units. Default value is "1828800". |
| nHeight | Optional | [EMU](../../../Enumerations/Emu.md) | The Text Art heigth measured in English measure units. Default value is "1828800". |
| nFromCol | Optional | Number | The column number where the beginning of the Text Art object will be placed. Default value is "0". |
| nFromRow | Optional | Number | The row number where the beginning of the Text Art object will be placed. Default value is "0". |
| nColOffset | Optional | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromCol column to the left part of the Text Art object measured in English measure units. Default value is "0". |
| nRowOffset | Optional | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromRow row to the upper part of the Text Art object measured in English measure units. Default value is "0". |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example adds a Text Art object to the sheet with the parameters specified.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(72);
oTextPr.SetBold(true);
oTextPr.SetCaps(true);
oTextPr.SetColor(51, 51, 51, false);
oTextPr.SetFontFamily("Comic Sans MS");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oWorksheet.AddWordArt(oTextPr, "onlyoffice", "textArchUp", oFill, oStroke, 0, 100 * 36000, 20 * 36000, 0, 2, 2 * 36000, 3 * 36000);
builder.SaveFile("xlsx", "AddWordArt.xlsx");
builder.CloseFile();
```