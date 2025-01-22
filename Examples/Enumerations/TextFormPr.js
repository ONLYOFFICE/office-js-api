// This example creates a a text form with the common and specific text form properties.
let textFormPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false};
let textForm = Api.CreateTextForm(textFormPr);