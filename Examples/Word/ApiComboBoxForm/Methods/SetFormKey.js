// This example sets a key to the current form.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetFormKey("Personal information");
let key = comboBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
document.Push(paragraph);