// Assign a unique ID to a complex form in a document.

// Set a custom ID for a complex form to tell it apart from other forms in a document.

// Give a complex form an ID that is saved to the file, unlike the internal ID which can change after reopening.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetId(1001);
let formId = complexForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);