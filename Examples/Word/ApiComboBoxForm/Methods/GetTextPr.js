// This example returns the text properties from the current form.

// How to get text propertiest of a combobox form.

// Make combobox text italic.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
comboBoxForm.SetTextPr(textPr);
let formTextPr = comboBoxForm.GetTextPr();
formTextPr.SetItalic(true);
comboBoxForm.SetTextPr(formTextPr);