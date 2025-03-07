// This example inserts a text box with the specified text box properties over the selected text.

// How to create a text form with its properties that should be inserted.

// Create a insert property and apply it to the text form.

let textFormInsertPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false};
doc.InsertTextForm(textFormInsertPr);