// Read the ID assigned to a combo box form in a document.

// Check the ID that was set for a combo box form with the SetId method in a document.

// Display the combo box form ID that is saved to the file and stays the same after the document is reopened.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetId(1001);
let formId = comboBoxForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);