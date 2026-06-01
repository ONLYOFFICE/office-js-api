// Assign an input format to a text field in a document.

// How do I restrict a text field to accept only a certain type of input in a document?

// Enforce a structured input pattern on a text field to guide user entries in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Phone", placeholder: "Enter digits" });
textForm.SetFormat({ type: "digit" });
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form with digit format: ");
paragraph.Push(textForm);