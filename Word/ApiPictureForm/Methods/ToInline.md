# ToInline

Converts the current form to an inline form. Picture form can't be converted to an inline form, it's always a fixed size object.<br>Inherited From: [ApiFormBase#ToInline](../../ApiFormBase/Methods/ToInline.md)

## Syntax

expression.ToInline();

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example converts the current form to an inline form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetTipText("Upload your photo");
var oCopyPictureForm= oPictureForm.Copy();
oCopyPictureForm.ToInline();
var bFixed = oPictureForm.IsFixed();
var bFixedCopy = oCopyPictureForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oParagraph.AddLineBreak();
oParagraph.AddText("The second form from this document has a fixed size: " + bFixedCopy);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToInline.docx");
builder.CloseFile();
```