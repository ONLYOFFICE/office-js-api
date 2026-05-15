// Read the tag attached to a combo box form in a document.

// How do I retrieve the tag of a combo box form in a document?

// Verify that the expected tag value is stored on the form for lookup or filtering purposes.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"tag" : "Country", "key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tag = comboBoxForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);