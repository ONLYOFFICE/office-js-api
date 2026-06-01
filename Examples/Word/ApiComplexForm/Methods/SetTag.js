// Attach a custom tag to a complex form in a document.

// How do I label a form with a tag in a document?

// Organize or categorize forms by tagging them for later lookup or processing.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetTag("Custom tag")
paragraph.AddElement(complexForm);
let tag = complexForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);