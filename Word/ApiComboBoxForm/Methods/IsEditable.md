# IsEditable

Checks if the combo box text can be edited. If it is not editable, then this form is a dropdown list.

## Syntax

expression.IsEditable();

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the combo box text can be edited.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var bEdit = oComboBoxForm.IsEditable();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first combo box from this document is editable: " + bEdit);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsEditable.docx");
builder.CloseFile();
```