# AddImage

Adds an image to the current sheet with the parameters specified.

## Syntax

expression.AddImage(sImageSrc, nWidth, nHeight, nFromCol, nColOffset, nFromRow, nRowOffset);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | String | The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The image width in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The image height in English measure units. |
| nFromCol | Required | Number | The number of the column where the beginning of the image will be placed. |
| nColOffset | Required | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromCol column to the left part of the image measured in English measure units. |
| nFromRow | Required | Number | The number of the row where the beginning of the image will be placed. |
| nRowOffset | Required | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromRow row to the upper part of the image measured in English measure units. |

## Returns

[ApiImage](../../ApiImage/ApiImage.md)

## Example

This example adds an image to the sheet with the parameters specified.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
builder.SaveFile("xlsx", "AddImage.xlsx");
builder.CloseFile();
```