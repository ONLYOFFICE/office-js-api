# GetTextPr

Returns the text properties from the current form. This method is used only for text and combo box forms.<br>Inherited From: [ApiFormBase#GetTextPr](../../ApiFormBase/Methods/GetTextPr.md)

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example returns the text properties from the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 2");
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oCheckBoxForm.SetTextPr(oTextPr);
var oFormTextPr = oCheckBoxForm.GetTextPr();
oFormTextPr.SetItalic(true);
oCheckBoxForm.SetTextPr(oFormTextPr);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
```