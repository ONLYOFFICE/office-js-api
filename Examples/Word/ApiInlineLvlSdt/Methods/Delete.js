// Remove an inline content control from a document.

// How do I delete an inline content control in a document?

// Replace a content control with plain text to clean up unwanted input fields in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.Delete(false);
paragraph.AddText("The inline text content control was removed.");