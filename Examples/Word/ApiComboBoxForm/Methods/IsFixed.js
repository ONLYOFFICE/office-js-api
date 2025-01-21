// This example checks if the current form is fixed size.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let fixed = comboBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
document.Push(paragraph);