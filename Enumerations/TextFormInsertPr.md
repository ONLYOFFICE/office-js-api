# TextFormInsertPr

Properties for inserting a text field.

## Type

[FormPrBase](./FormPrBase.md) &#124; [TextFormPrBase ](./TextFormPrBase.md) &#124; [FormInsertPr ](./FormInsertPr.md)

## Example

This example inserts a text box with the specified text box properties over the selected text.

```javascript
var oTextFormInsertPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false};
oDocument.InsertTextForm(oTextFormInsertPr);
```