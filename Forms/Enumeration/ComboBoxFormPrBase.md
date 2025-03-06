# ComboBoxFormPrBase

Specific combo box / dropdown list properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| autoFit | boolean | Specifies if the combo box form content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form. |
| editable | boolean | Specifies if the combo box text can be edited. |
| items | (string \| string[])[] | The combo box items.\nThis array consists of strings or arrays of two strings where the first string is the displayed value and the second one is its meaning.\nIf the array consists of single strings, then the displayed value and its meaning are the same.\nExample: ["First", ["Second", "2"], ["Third", "3"], "Fourth"]. |


## Example

This example creates a combo box form with the specific combo box form properties.

```javascript editor-pdf
let comboBoxFormPrBase = {"editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPrBase);
```
