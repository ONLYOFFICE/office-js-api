# GetTextPr

Returns the text properties from the current form. This method is used only for text and combo box forms.<br>Inherited From: [ApiFormBase#GetTextPr](../../ApiFormBase/Methods/GetTextPr.md)

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example returns the text properties from the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTextForm.SetTextPr(oTextPr);
var oFormTextPr = oTextForm.GetTextPr();
oFormTextPr.SetItalic(true);
oTextForm.SetTextPr(oFormTextPr);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
```