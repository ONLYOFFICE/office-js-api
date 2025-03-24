// This example sets the border color of the combo box form using RGB 

// Applies an orange border (RGB: 255, 111, 61) to highlight the combo box form visually.

// Use SetBorderColor(r, g, b) to define the border color.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetBorderColor(255, 111, 61);