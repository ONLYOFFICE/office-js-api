# AddImage

Adds an image to the current sheet with the parameters specified.

## Syntax

```javascript
expression.AddImage(sImageSrc, nWidth, nHeight, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |
| nFromCol | Required | number |  | The number of the column where the beginning of the image will be placed. |
| nColOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromCol column to the left part of the image measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the beginning of the image will be placed. |
| nRowOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromRow row to the upper part of the image measured in English measure units. |

## Returns

[ApiImage](../../ApiImage/ApiImage.md)

## Example

This example adds an image to the sheet with the parameters specified.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
```
