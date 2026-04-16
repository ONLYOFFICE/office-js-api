// Specify if the form should be required.

// How do I set required in a document?

// Set required using a complex form object.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetRequired(true);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);