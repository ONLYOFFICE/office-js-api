// Duplicate a complex form and insert the copy in a document.

// How do I copy a complex form to reuse it in a document?

// Create an identical second form from an existing one to repeat the same input structure.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add('Text');
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let copyComplexForm = complexForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyComplexForm);