// This example creates a copy of an inline content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let copyInlineLvlSdt = inlineLvlSdt.Copy();
paragraph.AddLineBreak();
paragraph.AddInlineLvlSdt(copyInlineLvlSdt);