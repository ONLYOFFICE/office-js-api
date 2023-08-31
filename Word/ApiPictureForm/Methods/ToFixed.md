# ToFixed

Converts the current form to a fixed size form.<br>Inherited From: [ApiFormBase#ToFixed](../../ApiFormBase/Methods/ToFixed.md)

## Syntax

expression.ToFixed(nWidth, nHeight);

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [twips](../../../Enumerations/twips.md) | The wrapper shape width measured in twentieths of a point (1/1440 of an inch). |
| nHeight | Required | [twips](../../../Enumerations/twips.md) | The wrapper shape height measured in twentieths of a point (1/1440 of an inch). |

## Returns

Boolean

## Example

This example converts the current form to a fixed size form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.ToFixed(10 * 240, 10 * 240);
var bFixed = oPictureForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToFixed.docx");
builder.CloseFile();
```