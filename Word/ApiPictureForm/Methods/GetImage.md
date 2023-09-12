# GetImage

Returns an image in the base64 format from the current picture form.

## Syntax

expression.GetImage();

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

base64img

## Example

This example shows how to get an image in the base64 format from the picture form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png");
var base64img = oPictureForm.GetImage();
var oDrawing = Api.CreateImage(base64img, 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "GetImage.docx");
builder.CloseFile();
```