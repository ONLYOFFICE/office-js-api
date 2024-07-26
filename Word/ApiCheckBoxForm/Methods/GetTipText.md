# GetTipText

Returns the tip text of the current form.

## Syntax

expression.GetTipText();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the tip text of the form.

```javascript
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var sTipText = oComboBoxForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form tip text: " + sTipText);
oDocument.Push(oParagraph);
```
