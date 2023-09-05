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
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreateImage.docx");
builder.CloseFile();
```