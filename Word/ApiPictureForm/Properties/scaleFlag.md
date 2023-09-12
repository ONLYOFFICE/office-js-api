# scaleFlag

The condition to scale an image in the picture form: [ScaleFlag](../../../Enumerations/ScaleFlag.md).

## Syntax

expression.scaleFlag or expression.scaleFlag = [ScaleFlag](../../../Enumerations/ScaleFlag.md);

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Returns

[ScaleFlag](../../../Enumerations/ScaleFlag.md)

## Example

This example sets scale for image, then gets it and inserts into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.ScaleFlag = "tooBig";
var sScaleFlag = oPictureForm.ScaleFlag;
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Picture scale flag: " + sScaleFlag);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetScaleFlag.docx");
builder.CloseFile();
```