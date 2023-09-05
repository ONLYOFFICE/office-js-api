# GetFormType

Returns a type of the current form.<br>Inherited From: [ApiFormBase#GetFormType](../../ApiFormBase/Methods/GetFormType.md)

## Syntax

expression.GetFormType();

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[FormType](../../../Enumerations/FormType.md)

## Example

This example shows how to get a type of the form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var sFormType = oComboBoxForm.GetFormType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form type: " + sFormType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormType.docx");
builder.CloseFile();
```