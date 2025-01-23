# SetLockAspectRatio

Locks the aspect ratio of the current picture form.

## Syntax

expression.SetLockAspectRatio(isLock);

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isLock | Optional | boolean | true | Specifies if the aspect ratio of the current picture form will be locked (true) or not (false). |

## Returns

boolean

## Example

This example locks the aspect ratio of the picture form.

```javascript
let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
pictureForm.SetLockAspectRatio(true);
let lock = pictureForm.IsLockAspectRatio();
paragraph = Api.CreateParagraph();
paragraph.AddText("The aspect ratio of the first picture form in this document is locked: " + lock);
doc.Push(paragraph);
```
