# Copy

Copies the current form (copies with the shape if it exists).<br>Inherited From: [ApiFormBase#Copy](../../ApiFormBase/Methods/Copy.md)

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiPictureForm](../ApiPictureForm.md)

## Example

This example copies the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
var oCopyPictureForm = oPictureForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyPictureForm);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
```