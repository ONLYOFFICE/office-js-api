// Clear content of complex form.

// How can I clear content using a complex form in a document?

// Clear content for a complex form in a document.

let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.Add(Api.CreateCheckBoxForm());
complexForm.Add("Text");
complexForm.ClearContent();
doc.Push(paragraph);