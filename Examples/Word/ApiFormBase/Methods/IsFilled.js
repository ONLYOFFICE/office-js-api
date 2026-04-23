// Check whether a form field contains a value entered by the user in a document.

// How do I tell if a form field has been filled out in a document?

// Verify the fill status of multiple form fields to determine which ones still need input in a document.

let doc = Api.GetDocument();
let textForm1 = Api.CreateTextForm({"key": "Name1", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": false, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm1);
let textForm2 = Api.CreateTextForm({"key": "Name2", "tip": "Enter your last name", "required": true, "placeholder": "Last name", "comb": false, "multiLine": false, "autoFit": false});
paragraph.AddElement(textForm2);
textForm2.SetText("Smith");
let filled1 = textForm1.IsFilled();
let filled2 = textForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second text form is filled: " + filled2);
doc.Push(paragraph);