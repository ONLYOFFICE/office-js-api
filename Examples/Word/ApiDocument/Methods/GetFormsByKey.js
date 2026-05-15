// Retrieve all form fields sharing the same key and report their count in a document.

// How do I find every form field that uses a given key in a document?

// Locate duplicate-keyed form fields across multiple paragraphs in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"key": "Country", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
textForm = Api.CreateTextForm({"key": "FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
paragraph.AddElement(textForm);

let forms = doc.GetFormsByKey("FirstName");
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Number of forms with key 'FirstName': " + forms.length);