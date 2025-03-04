# FormInsertPr

Form insertion specific properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| placeholderFromSelection | boolean | Specifies if the currently selected text should be saved as a placeholder of the inserted form. |
| keepSelectedTextInForm | boolean | Specifies if the currently selected text should be saved as the content of the inserted form. |


## Example

This example inserts a text box with the specified text box properties over the selected text.

```javascript editor-pdf
let textFormInsertPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false};
doc.InsertTextForm(textFormInsertPr);
```
