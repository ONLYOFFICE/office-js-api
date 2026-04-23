// Add text to an inline content control in a document.

// How do I insert text into an inline text content control in a document?

// Fill an inline content control with a plain-text string in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);