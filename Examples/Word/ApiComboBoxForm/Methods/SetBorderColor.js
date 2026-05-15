// Apply a custom border color to a combo box form field in a document.

// How do I change the outline color of a combo box form in a document?

// Make a combo box visually distinct by giving its border a specific color in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));