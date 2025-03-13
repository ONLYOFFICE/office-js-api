// This example creates a combo box form with the specific combo box form properties.

// How to create a combo box form with its base properties.

// Create the base properties and apply them to the ApiComboBoxForm object.

let comboBoxFormPrBase = {"editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPrBase);