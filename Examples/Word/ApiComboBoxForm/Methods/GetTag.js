// This example shows how to get the form tag.
let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"tag" : "Country", "key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tag = comboBoxForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);