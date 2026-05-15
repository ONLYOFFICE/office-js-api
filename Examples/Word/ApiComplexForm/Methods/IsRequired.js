// Check whether a complex form is marked as required in a document.

// How do I find out if a form must be filled out in a document?

// Confirm a form's required status before submitting or processing the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1", "required": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let required = complexForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);