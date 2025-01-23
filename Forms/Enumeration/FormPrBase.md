# FormPrBase

Common form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | string | Form key. |
| tip | string | Form tip text. |
| tag | string | Form tag. |
| required | boolean | Specifies if the form is required or not. |
| placeholder | string | Form placeholder text. |


## Example

This example creates a text form with the common form properties.

```javascript
let formPrBase = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name"};
let textForm = Api.CreateTextForm(formPrBase);
```
