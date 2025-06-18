// This example copies the form.

// How to remove selected item from the combobox form.

// Clear answer from the combobox form.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let copyComboBoxForm = comboBoxForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyComboBoxForm);