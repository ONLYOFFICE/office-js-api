# FormPrBase

Common form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | string | Form key. |
| tip | string | Form tip text. |
| required | boolean | Specifies if the form is required or not. |
| placeholder | string | Form placeholder text. |



## Example

This example creates a text form with the common form properties.

```javascript
var oFormPrBase = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name"};
var oTextForm = Api.CreateTextForm(oFormPrBase);
```
