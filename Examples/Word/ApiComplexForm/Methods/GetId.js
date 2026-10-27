// Read the ID assigned to a complex form in a document.

// Check the ID that was set for a complex form with the SetId method in a document.

// Display the complex form ID that is saved to the file and stays the same after the document is reopened.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetId(1001);
let formId = complexForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);