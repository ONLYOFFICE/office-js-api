// This example creates a combo box form with the specific combo box form properties.

// How to create a combobox form with its base properties.

// Create a base property and apply it to the combobox form.

let comboBoxFormPrBase = {"editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPrBase);