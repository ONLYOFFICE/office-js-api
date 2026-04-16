// Remove a content control and its content in a document.

// How to delete inline text element in a document.

// Add inline content control and then clear its content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.Delete(false);
paragraph.AddText("The inline text content control was removed.");