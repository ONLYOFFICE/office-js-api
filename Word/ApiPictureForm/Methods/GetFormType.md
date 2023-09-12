# GetFormType

Returns a type of the current form.<br>Inherited From: [ApiFormBase#GetFormType](../../ApiFormBase/Methods/GetFormType.md)

## Syntax

expression.GetFormType();

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[FormType](../../../Enumerations/FormType.md)

## Example

This example shows how to get a type of the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var sFormType = oPictureForm.GetFormType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form type: " + sFormType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormType.docx");
builder.CloseFile();
```