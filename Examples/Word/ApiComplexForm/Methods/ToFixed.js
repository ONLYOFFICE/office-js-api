// Convert the current form to a fixed size form.

// How can I to fixed using a complex form in a document?

// To fixed for a complex form in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.ToFixed(7 * 240, 2 * 240);