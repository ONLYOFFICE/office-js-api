# TextFormPrBase

Specific text field properties.

## Type

Object

## Properties

| **Name**  | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| comb | Boolean | Specifies if the text field should be a comb of characters with the same cell width. The maximum number of characters must be set to a positive value. |
| maxCharacters | Number | The maximum number of characters in the text field. |
| cellWidth | Number | The cell width for each character measured in millimeters. If this parameter is not specified or equal to 0 or less, then the width will be set automatically. |
| multiLine | Boolean | Specifies if the current fixed size text field is multiline or not. |
| autoFit | Boolean | Specifies if the text field content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form. |

## Example

This example creates a text form with the specific text form properties.

```javascript
var oTextFormPrBase = {"comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false};
var oTextForm = Api.CreateTextForm(oTextFormPrBase);
```