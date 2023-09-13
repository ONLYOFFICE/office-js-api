# ReplaceCurrentImage

Replaces the current image with a new one.

## Syntax

expression.ReplaceCurrentImage(sImageUrl, nWidth, nHeight);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | String | The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The image width in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The image height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example replaces the image with a new one.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oDrawing = oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
// todo_example we don't have method ApiDrawing.Select() which is necessary for this example
oWorksheet.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
builder.SaveFile("xlsx", "ReplaceCurrentImage.xlsx");
builder.CloseFile();
```