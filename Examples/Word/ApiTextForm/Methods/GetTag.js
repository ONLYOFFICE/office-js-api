// Retrieve the tag assigned to a text field in a document.

// How do I find out what tag is attached to a text field in a document?

// Read a label stored on a text field to identify it in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"tag" : "Info", "key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let tag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);