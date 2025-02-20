# GetPicturePosition

Returns the picture position inside the current form.

## Syntax

```javascript
expression.GetPicturePosition();
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[percentage[]](../../Enumeration/percentage.md)

## Example

This example shows how to get the picture position inside the current form.

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
