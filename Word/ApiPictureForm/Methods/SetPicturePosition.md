# SetPicturePosition

Sets the picture position inside the current form:**0** - the picture is placed on the left/top;**50** - the picture is placed in the center;**100** - the picture is placed on the right/bottom.

## Syntax

```javascript
expression.SetPicturePosition(nShiftX, nShiftY);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nShiftX | Required | [percentage](../../Enumeration/percentage.md) |  | Horizontal position measured in percent. |
| nShiftY | Required | [percentage](../../Enumeration/percentage.md) |  | Vertical position measured in percent. |

## Returns

boolean

## Example

This example sets the picture position inside the form.

```javascript editor-docx
let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
pictureForm.SetPicturePosition(70, 70);
let position = pictureForm.GetPicturePosition();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture position: ");
paragraph.AddLineBreak();
for (let i = 0; i < position.length; i++ ){
	let shift = position[i];
	paragraph.AddText("" + shift);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);
```
