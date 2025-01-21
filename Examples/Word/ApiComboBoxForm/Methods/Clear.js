// This example clears the form.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetText("John Smith");
comboBoxForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
document.Push(paragraph);