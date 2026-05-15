// Set the text value of a combo box form in a document.

// How do I set the text value of a combo box form in a document?

// Pre-fill a combo box with a custom entry that is not in the predefined list in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetText("France");