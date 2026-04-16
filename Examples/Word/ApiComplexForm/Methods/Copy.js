// Copy the form.

// How can I copy using a complex form in a document?

// Copy for a complex form in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add('Text');
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let copyComplexForm = complexForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyComplexForm);