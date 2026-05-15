// Set placeholder text on a complex form in a document.

// How do I add instructional placeholder text to a form in a document?

// Guide users by displaying a hint inside an empty form before they begin filling it in.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetPlaceholderText("Start adding forms and text");