// Convert a complex form to a fixed size in a document.

// How do I set a fixed size for a complex form in a document?

// Lock the dimensions of a form so it no longer resizes to fit its content in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.ToFixed(7 * 240, 2 * 240);