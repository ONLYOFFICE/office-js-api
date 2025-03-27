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
| nRotAngle | Optional | number | 0 | Rotation angle. |
| nWidth | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art width measured in English measure units. |
| nHeight | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art heigth measured in English measure units. |
| nFromCol | Optional | number | 0 | The column number where the beginning of the Text Art object will be placed. |
| nFromRow | Optional | number | 0 | The row number where the beginning of the Text Art object will be placed. |
| nColOffset | Optional | [EMU](../../Enumeration/EMU.md) | 0 | The offset from the nFromCol column to the left part of the Text Art object measured in English measure units. |
| nRowOffset | Optional | [EMU](../../Enumeration/EMU.md) | 0 | The offset from the nFromRow row to the upper part of the Text Art object measured in English measure units. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example adds a Text Art object to the sheet with the parameters specified.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let textProps = Api.CreateTextPr();
textProps.SetFontSize(72);
textProps.SetBold(true);
textProps.SetCaps(true);
textProps.SetColor(51, 51, 51, false);
textProps.SetFontFamily("Comic Sans MS");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
worksheet.AddWordArt(textProps, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 20 * 36000, 0, 2, 2 * 36000, 3 * 36000);
```
