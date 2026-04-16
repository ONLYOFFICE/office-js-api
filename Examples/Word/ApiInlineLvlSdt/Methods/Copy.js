// Create a copy of an inline content control in a document.

// How to create a duplicate of the inline text element in a document.

// Add inline content control and its copy to the paragraph separated by a line break in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let copyInlineLvlSdt = inlineLvlSdt.Copy();
paragraph.AddLineBreak();
paragraph.AddInlineLvlSdt(copyInlineLvlSdt);