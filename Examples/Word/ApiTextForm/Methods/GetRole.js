// Read the role assigned to a text field in a document.

// How do I find out what role is associated with a text entry area in a document?

// Inspect the responsibility label attached to a text field to understand its purpose in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let role = textForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + role);
doc.Push(paragraph);