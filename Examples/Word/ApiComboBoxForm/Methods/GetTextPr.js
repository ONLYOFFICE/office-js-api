// This example returns the text properties from the current form.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
comboBoxForm.SetTextPr(textPr);
let formTextPr = comboBoxForm.GetTextPr();
formTextPr.SetItalic(true);
comboBoxForm.SetTextPr(formTextPr);