// Retrieve the key assigned to a complex form in a document.

// How do I get the key of a complex form in a document?

// Read a form's identifier to reference or validate it by its assigned key value.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let key = complexForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);