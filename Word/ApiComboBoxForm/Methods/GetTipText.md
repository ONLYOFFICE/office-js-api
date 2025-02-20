# GetTipText

Returns the tip text of the current form.

## Syntax

```javascript
expression.GetTipText();
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the tip text of the form.

```javascript editor-docx
let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tipText = comboBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
