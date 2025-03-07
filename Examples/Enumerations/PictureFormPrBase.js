// This example creates a combo box form with the specific combo box form properties.

// How to set a base properties of a picture form.

// Specify picture form base properties like placeholder, tip text, position, key, etc.

let comboBoxFormPr = {"editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPr);