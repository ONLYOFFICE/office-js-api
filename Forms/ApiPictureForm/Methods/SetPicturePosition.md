# SetPicturePosition

Sets the picture position inside the current form:* **0** - the picture is placed on the left/top;* **50** - the picture is placed in the center;* **100** - the picture is placed on the right/bottom.

## Syntax

expression.SetPicturePosition(nShiftX, nShiftY);

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

```javascript
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
```
