// Retrieve all form fields in a document.

// How do I access every form field present in a document?

// Pre-fill a text field and select a combo box value when automating document completion.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"key": "Country", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);
let forms = doc.GetAllForms();
forms[0].SetText("John Smith");
forms[1].SelectListValue("USA");