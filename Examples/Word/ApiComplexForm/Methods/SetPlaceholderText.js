// Set the placeholder text to the complex form.

// How do I set placeholder text in a document?

// Set placeholder text using a complex form object.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetPlaceholderText("Start adding forms and text");