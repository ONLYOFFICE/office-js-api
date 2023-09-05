# ReplaceCurrentImage

Replaces the current image with an image specified.

## Syntax

expression.ReplaceCurrentImage(sImageUrl, Width, Height);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | String | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| Width | Required | [EMU](../../../Enumerations/Emu.md) | The image width in English measure units. |
| Height | Required | [EMU](../../../Enumerations/Emu.md) | The image height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example shows how to replace the current image with an image specified.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 300 * 36000, 150 * 36000);
oSlide.AddObject(oDrawing);
oDrawing.Select();
oPresentation.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
builder.SaveFile("pptx", "ReplaceCurrentImage.pptx");
builder.CloseFile();
```