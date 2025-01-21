// This example checks if the combo box text can be edited.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
let editable = comboBoxForm.IsEditable();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first combo box from this document is editable: " + editable);
document.Push(paragraph);