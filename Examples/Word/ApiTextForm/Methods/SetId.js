// Assign a unique ID to a text form in a document.

// Set a custom ID for a text form to tell it apart from other forms in a document.

// Give a text form an ID that is saved to the file, unlike the internal ID which can change after reopening.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetId(1001);
let formId = textForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);