# TextFormPr

Text field properties.

## Type

[FormPrBase](./FormPrBase.md) &#124; [TextFormPrBase](./TextFormPrBase.md)

## Example

This example creates a a text form with the common and specific text form properties.

```javascript
var oTextFormPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false};
var oTextForm = Api.CreateTextForm(oTextFormPr);
```