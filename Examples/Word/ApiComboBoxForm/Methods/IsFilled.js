// This example checks whether the combobox form is filled.

// How to check if the combobox form has any text set.

// Create two combobox forms, fill the second one, and check if each form is filled.

let doc = Api.GetDocument();
let comboBoxForm1 = Api.CreateComboBoxForm({"key": "Country1", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm1);
let comboBoxForm2 = Api.CreateComboBoxForm({"key": "Country2", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddElement(comboBoxForm2);
comboBoxForm2.SetText("Latvia");
let filled1 = comboBoxForm1.IsFilled();
let filled2 = comboBoxForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first combobox form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second combobox form is filled: " + filled2);
doc.Push(paragraph);
