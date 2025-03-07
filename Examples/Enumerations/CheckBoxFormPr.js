// This example creates a checkbox form with the common and specific checkbox from properties.

// How to create a checkbox form with its properties.

// Create a property and apply it to the checkbox form.

let checkBoxFormPr = {"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true};
let checkBoxForm = Api.CreateCheckBoxForm(checkBoxFormPr);