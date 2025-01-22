// This example inserts a text box with the specified text box properties over the selected text.
let textFormInsertPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false};
document.InsertTextForm(textFormInsertPr);