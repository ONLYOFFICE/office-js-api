# FormInsertPr

Form insertion specific properties.

## Type

Object

## Properties

| **Name** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| placeholderFromSelection | Boolean | Specifies if the currently selected text should be saved as a placeholder of the inserted form. |
| keepSelectedTextInForm | Boolean | Specifies if the currently selected text should be saved as the content of the inserted form. |

## Example

This example inserts a text box with the specified text box properties over the selected text.

```javascript
var oTextFormInsertPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false};
oDocument.InsertTextForm(oTextFormInsertPr);
```