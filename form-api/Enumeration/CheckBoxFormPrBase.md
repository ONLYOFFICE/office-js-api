# CheckBoxFormPrBase

Specific checkbox / radio button properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| radio | boolean | Specifies if the current checkbox is a radio button. In this case, the key parameter is considered as an identifier for the group of radio buttons. |


## Example

This example creates a checkbox form with the specific checkbox form properties.

```javascript editor-pdf
let checkBoxFormPrBase = {"radio": true};
let checkBoxForm = Api.CreateCheckBoxForm(checkBoxFormPrBase)
```
