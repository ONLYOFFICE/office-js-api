// This example shows how to get the internal id of a form.

// How to get an internal id of a text form.

// Retrieve the internal id of a created text form and display it.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let internalId = textForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
