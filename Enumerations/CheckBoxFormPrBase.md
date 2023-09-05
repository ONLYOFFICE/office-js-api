# CheckBoxFormPrBase

Specific checkbox / radio button properties.

## Type

Object

## Properties

| **Name** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| radio | Boolean | Specifies if the current checkbox is a radio button. In this case, the key parameter is considered as an identifier for the group of radio buttons. |

## Example

This example creates a checkbox form with the specific checkbox form properties.

```javascript
var oCheckBoxFormPrBase = {"radio": true};
var oCheckBoxForm = Api.CreateCheckBoxForm(oCheckBoxFormPrBase)
```