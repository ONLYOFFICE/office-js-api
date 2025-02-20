# SetRespectBorders

Respects the form border width when scaling the image.

## Syntax

```javascript
expression.SetRespectBorders(isRespect);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isRespect | Optional | boolean | true | Specifies if the form border width will be respected (true) or not (false). |

## Returns

boolean

## Example

This example respects the form border width when scaling the image.

```javascript editor-pdf
let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
pictureForm.SetRespectBorders(true);
let respectBorders = pictureForm.IsRespectBorders();
paragraph = Api.CreateParagraph();
paragraph.AddText("The borders of the first picture form in this document are respected when scaling the image: " + respectBorders);
doc.Push(paragraph);
```
