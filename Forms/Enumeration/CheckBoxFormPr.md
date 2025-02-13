# CheckBoxFormPr

Checkbox / radio button properties.

## Type

Enumeration

## Values

- [FormPrBase](../Enumeration/FormPrBase.md)
- [CheckBoxFormPrBase](../Enumeration/CheckBoxFormPrBase.md)


## Example

This example creates a checkbox form with the common and specific checkbox form properties.

```javascript
let checkBoxFormPr = {"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true};
let checkBoxForm = Api.CreateCheckBoxForm(checkBoxFormPr);
```
