# Copy

Copies the current form (copies with the shape if it exists).<br>Inherited From: [ApiFormBase#Copy](../../ApiFormBase/Methods/Copy.md)

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiComboBoxForm](../ApiComboBoxForm.md)

## Example

This example copies the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var oCopyComboBoxForm = oComboBoxForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyComboBoxForm);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
```