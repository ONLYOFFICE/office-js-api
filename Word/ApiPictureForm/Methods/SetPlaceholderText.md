# SetPlaceholderText

Sets the placeholder text to the current form. Can't be set to checkbox or radio button.<br>Inherited From: [ApiFormBase#SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the placeholder text to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.SetPlaceholderText("Picture form");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();
```