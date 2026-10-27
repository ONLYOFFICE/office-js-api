// Assign a unique ID to a combo box form in a document.

// Set a custom ID for a combo box form to tell it apart from other forms in a document.

// Give a combo box form an ID that is saved to the file, unlike the internal ID which can change after reopening.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetId(1001);
let formId = comboBoxForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);