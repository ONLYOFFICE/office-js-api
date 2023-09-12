# CreateImage

Creates an image with the parameters specified.

## Syntax

expression.CreateImage(sImageSrc, nWidth, nHeight);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | String | The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The image width in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The image height in English measure units. |

## Returns

[ApiImage](../../ApiImage/ApiImage.md)

## Example

This example creastes an image and pastes it into the document.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oShape = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/step2_1.png", 300 * 36000, 150 * 36000);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "CreateImage.pptx");
builder.CloseFile();
```