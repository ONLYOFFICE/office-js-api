# AddWordArt

Adds a Text Art object to the current sheet with the parameters specified.

## Syntax

```javascript
expression.AddWordArt(oTextPr, sText, sTransform, oFill, oStroke, nRotAngle, nWidth, nHeight, nFromCol, nFromRow, nColOffset, nRowOffset);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Optional | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | Api.CreateTextPr() | The text properties. |
| sText | Optional | string | "Your text here" | The text for the Text Art object. |
| sTransform | Optional | [TextTransform](../../Enumeration/TextTransform.md) | "textNoShape" | Text transform type. |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the Text Art object. |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the Text Art object shadow. |
| nRotAngle | Optional | number | false | Rotation angle. |
| nWidth | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art width measured in English measure units. |
| nHeight | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art heigth measured in English measure units. |
| nFromCol | Optional | number | false | The column number where the beginning of the Text Art object will be placed. |
| nFromRow | Optional | number | false | The row number where the beginning of the Text Art object will be placed. |
| nColOffset | Optional | [EMU](../../Enumeration/EMU.md) | false | The offset from the nFromCol column to the left part of the Text Art object measured in English measure units. |
| nRowOffset | Optional | [EMU](../../Enumeration/EMU.md) | false | The offset from the nFromRow row to the upper part of the Text Art object measured in English measure units. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example adds a Text Art object to the sheet with the parameters specified.

```javascript editor-xlsx
// How to add a word art to the worksheet specifying its properties, color, size, etc.

// Insert a word art to the worksheet.

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
```
