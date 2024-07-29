# CheckBoxFormPr

Checkbox / radio button properties.

## Type

Enumeration

## Values

- [FormPrBase](../../Enumeration/FormPrBase.md)
- [CheckBoxFormPrBase](../../Enumeration/CheckBoxFormPrBase.md)


## Example

This example creates a checkbox form with the common and specific checkbox form properties.

```javascript
var oCheckBoxFormPr = {"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true};
var oCheckBoxForm = Api.CreateCheckBoxForm(oCheckBoxFormPr);
```
