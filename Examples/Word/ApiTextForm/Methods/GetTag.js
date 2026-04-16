// Get the form tag in a document.

// How do I get the tag in a document?

// Get the tag using a text form object.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"tag" : "Info", "key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let tag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);