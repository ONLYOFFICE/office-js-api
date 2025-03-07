// This example creates a combo box form with the common and specific combo box form properties.

// How to create a combobox form with its properties.

// Create a base property and apply it to the combobox form.

let comboBoxFormPr = {"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPr);