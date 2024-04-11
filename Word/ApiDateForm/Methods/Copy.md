# Copy

Copies the current form (copies with the shape if it exists).<br>Inherited From: [ApiFormBase#Copy](../../ApiFormBase/Methods/Copy.md)

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiDateForm](../ApiDateForm.md)

## Example

This example copies the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
oDateForm.SetTime(new Date().getTime());
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var oCopyDateForm = oDateForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyDateForm);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
```