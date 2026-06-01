// Assign a unique key to a complex form in a document.

// How do I set or update the key of a form in a document?

// Link a form to a specific identifier so it can be referenced or grouped with related fields.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetFormKey("Complex2");
let key = complexForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);