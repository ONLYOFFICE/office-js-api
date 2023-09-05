# GetTextPr

Returns the text properties from the current form. This method is used only for text and combo box forms.<br>Inherited From: [ApiFormBase#GetTextPr](../../ApiFormBase/Methods/GetTextPr.md)

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example returns the text properties from the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oComboBoxForm.SetTextPr(oTextPr);
var oFormTextPr = oComboBoxForm.GetTextPr();
oFormTextPr.SetItalic(true);
oComboBoxForm.SetTextPr(oFormTextPr);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
```