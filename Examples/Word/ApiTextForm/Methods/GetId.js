// Read the ID assigned to a text form in a document.

// Check the ID that was set for a text form with the SetId method in a document.

// Display the text form ID that is saved to the file and stays the same after the document is reopened.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetId(1001);
let formId = textForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);