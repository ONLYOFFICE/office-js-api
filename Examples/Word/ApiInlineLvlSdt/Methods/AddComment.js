// Add a comment to an inline content control in a document.

// How do I attach a comment to an inline text control in a document?

// Annotate an inline control with a reviewer name and note in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddComment("comment", "John Smith");