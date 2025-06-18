// This example sets the background color of the combo box form using RGB values.

// Applies an RGB background color to the ComboBox form element.

// How to change background color of the combobox.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetBackgroundColor(255, 111, 61);