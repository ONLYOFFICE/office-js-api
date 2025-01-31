# IsLockAspectRatio

Checks if the aspect ratio of the current picture form is locked or not.

## Syntax

```javascript
expression.IsLockAspectRatio();
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the aspect ratio of the current picture form is locked or not.

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
