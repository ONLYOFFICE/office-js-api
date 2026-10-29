// Move the cursor to the end of a combo box form in a document.

// The cursor is placed inside the combo box form. Use the MoveCursorOutside method to place it before or after the form.

// Place the cursor after the last character of the selected list value.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SelectListValue("Latvia");
comboBoxForm.MoveCursorToEnd();
