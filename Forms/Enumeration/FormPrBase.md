# FormPrBase

Common form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | string | Form key. |
| placeholder | string | Form placeholder text. |
| required | boolean | Specifies if the form is required or not. |
| tag | string | Form tag. |
| tip | string | Form tip text. |


## Example

This example creates a text form with the common form properties.

```javascript editor-pdf
let formPrBase = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name"};
let textForm = Api.CreateTextForm(formPrBase);
```
