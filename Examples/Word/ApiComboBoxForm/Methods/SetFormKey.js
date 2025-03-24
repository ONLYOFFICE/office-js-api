// This example sets a unique key identifier for the combo box form.

// Use SetFormKey to assign a key, which can be used to reference or validate the form later.

// Retrieves the assigned key and displays it in a new paragraph within the document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetFormKey("Personal information");
let key = comboBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);