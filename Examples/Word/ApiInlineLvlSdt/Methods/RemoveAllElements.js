// Remove all elements from an inline content control in a document.

// How do I clear all content from an inline text control in a document?

// Reset a content control to empty when replacing its contents with fresh text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("This is an inline text content control.");
inlineLvlSdt.RemoveAllElements();
inlineLvlSdt.AddText("We removed all the inline content control elements.");