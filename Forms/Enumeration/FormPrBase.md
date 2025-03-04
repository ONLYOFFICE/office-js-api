# FormPrBase

Common form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | [string](../../Word/string/string.md) | Form key. |
| tip | [string](../../Word/string/string.md) | Form tip text. |
| tag | [string](../../Word/string/string.md) | Form tag. |
| required | [boolean](../../Word/boolean/boolean.md) | Specifies if the form is required or not. |
| placeholder | [string](../../Word/string/string.md) | Form placeholder text. |


## Example

This example creates a text form with the common form properties.

```javascript editor-pdf
let formPrBase = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name"};
let textForm = Api.CreateTextForm(formPrBase);
```
