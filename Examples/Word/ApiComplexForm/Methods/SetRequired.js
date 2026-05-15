// Mark a complex form as required in a document.

// How do I make a form field mandatory in a document?

// Enforce that a form must be completed before the document can be submitted.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetRequired(true);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);