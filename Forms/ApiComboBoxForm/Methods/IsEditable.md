# IsEditable

Checks if the combo box text can be edited. If it is not editable, then this form is a dropdown list.

## Syntax

```javascript
expression.IsEditable();
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the combo box text can be edited.

```javascript
let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let editable = comboBoxForm.IsEditable();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first combo box from this document is editable: " + editable);
doc.Push(paragraph);
```
