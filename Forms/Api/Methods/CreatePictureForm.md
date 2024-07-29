# CreatePictureForm

Creates a picture form with the specified picture form properties.

## Syntax

expression.CreatePictureForm(oFormPr);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [PictureFormPr](../../Enumeration/PictureFormPr.md) |  | Picture form properties. |

## Returns

[ApiPictureForm](../../ApiPictureForm/ApiPictureForm.md)

## Example

This example creates a picture form with the common and specific picture form properties.

```javascript
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
```
