// Set placeholder text on a combo box form in a document.

// How do I add placeholder text to a combo box form in a document?

// Guide users on what to select by displaying hint text inside an empty combo box in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetPlaceholderText("Country");