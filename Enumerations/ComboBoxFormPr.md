# ComboBoxFormPr

Combo box / dropdown list properties.

## Type

[FormPrBase](./FormPrBase.md) &#124; [ComboBoxFormPrBase](./ComboBoxFormPrBase.md)

## Example

This example creates a combo box form with the common and specific combo box form properties.

```javascript
var oComboBoxFormPr = {"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
var oComboBoxForm = Api.CreateComboBoxForm(oComboBoxFormPr);
```