# SetScaleFlag

Sets the scaling condition to the current picture form.

## Syntax

expression.SetScaleFlag(sScaleFlag);

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sScaleFlag | Required | [ScaleFlag](../../../Enumerations/ScaleFlag.md) | Picture scaling condition |

## Returns

Boolean

## Example

This example sets the scaling condition to the current picture form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.SetScaleFlag("tooBig");
var sScaleFlag = oPictureForm.GetScaleFlag();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Picture scale flag: " + sScaleFlag);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetScaleFlag.docx");
builder.CloseFile();
```