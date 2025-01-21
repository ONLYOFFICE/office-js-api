// This example shows how to get the text from the form.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
let text = comboBoxForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
document.Push(paragraph);