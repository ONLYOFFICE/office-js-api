# SetTextPr

Sets the text properties to the current form. This method is used only for text and combo box forms.<br>Inherited From: [ApiFormBase#SetTextPr](../../ApiFormBase/Methods/SetTextPr.md)

## Syntax

expression.SetTextPr(oTextPr);

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The text properties that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the text properties to the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetTipText("Upload your photo");
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oPictureForm.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();
```