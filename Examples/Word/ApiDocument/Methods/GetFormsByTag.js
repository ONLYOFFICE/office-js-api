// Retrieve all forms that share a given tag name in a document.

// How do I look up forms by their tag in a document?

// Populate related form fields at once by targeting them through a shared tag in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"key": "Country", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);
let forms = doc.GetFormsByTag("form_1");
forms[0].SetText("John Smith");
forms[1].SelectListValue("USA");