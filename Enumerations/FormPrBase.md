# FormPrBase

Common form properties.

## Type

Object

## Properties

| **Name** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| key | String | Form key. |
| tip | String | Form tip text. |
| required | Boolean | Specifies if the form is required or not. |
| placeholder | String | Form placeholder text. |

## Example

This example creates a text form with the common form properties.

```javascript
var oFormPrBase = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name"};
var oTextForm = Api.CreateTextForm(oFormPrBase);
```