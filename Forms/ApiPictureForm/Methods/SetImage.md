# SetImage

Sets an image to the current picture form.

## Syntax

expression.SetImage(sImageSrc, nWidth, nHeight);

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

boolean

## Example

This example sets an image to the current picture form.

```javascript
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
```
