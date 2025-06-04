// This example creates a copy of an inline content control.

// How to create a duplicate of the inline text element.

// Add inline content control and its copy to the paragraph separated by a line break.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let copyInlineLvlSdt = inlineLvlSdt.Copy();
paragraph.AddLineBreak();
paragraph.AddInlineLvlSdt(copyInlineLvlSdt);