# SetScaleFlag

Sets the scaling condition to the current picture form.

## Syntax

```javascript
expression.SetScaleFlag(sScaleFlag);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScaleFlag | Required | [ScaleFlag](../../Enumeration/ScaleFlag.md) |  | Picture scaling condition: "always", "never", "tooBig" or "tooSmall". |

## Returns

boolean

## Example

This example sets the scaling condition to the current picture form.

```javascript editor-docx
let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
pictureForm.SetScaleFlag("tooBig");
let scaleFlag = pictureForm.GetScaleFlag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture scale flag: " + scaleFlag);
doc.Push(paragraph);
```
