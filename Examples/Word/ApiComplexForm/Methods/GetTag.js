// Read the tag value attached to a complex form in a document.

// How do I retrieve the tag assigned to a form in a document?

// Use the tag to identify or group related forms when processing them programmatically in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1", "tag": "Custom tag"});
paragraph.AddElement(complexForm);
let tag = complexForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);