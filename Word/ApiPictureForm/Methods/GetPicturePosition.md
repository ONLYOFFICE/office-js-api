# GetPicturePosition

Returns the picture position inside the current form.

## Syntax

expression.GetPicturePosition();

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[percentage](../../../Enumerations/percentage.md)> ([shiftX, shiftY])

## Example

This example shows how to get the picture position inside the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.SetPicturePosition(70, 70);
var aPosition = oPictureForm.GetPicturePosition();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Picture position: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aPosition.length; i++ ){
	var nShift = aPosition[i];
	oParagraph.AddText("" + nShift);
	oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetPicturePosition.docx");
builder.CloseFile();
```