# CreateOleObject

Creates an OLE object with the parameters specified.

## Syntax

expression.CreateOleObject(sImageSrc, nWidth, nHeight, sData, sAppId);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | String | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The OLE object width in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The OLE object height in English measure units. |
| sData | Required | String | The OLE object string data. |
| sAppId | Required | String | The application ID associated with the current OLE object. |

## Returns

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## Example

This example creates an Ole object and inserts it into the slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
oOleObject.SetSize(200 * 36000, 130 * 36000);
oOleObject.SetPosition(70 * 36000, 30 * 36000);
oSlide.AddObject(oOleObject);
builder.SaveFile("pptx", "CreateOleObject.pptx");
builder.CloseFile();
```