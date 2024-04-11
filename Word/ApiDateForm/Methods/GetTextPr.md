# GetTextPr

Returns the text properties from the current form. <br>Inherited From: [ApiFormBase#GetTextPr](../../ApiFormBase/Methods/GetTextPr.md)

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example returns the text properties from the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oDateForm.SetTextPr(oTextPr);
var oFormTextPr = oDateForm.GetTextPr();
oFormTextPr.SetItalic(true);
oDateForm.SetTextPr(oFormTextPr);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
```