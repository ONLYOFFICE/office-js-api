// This example shows how to get a Range object that represents the part of the document contained in the specified content control.

// How to get range of the inline text control.

// Get the range where the inline content control is located.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let range = inlineLvlSdt.GetRange(11, 16);
range.SetBold(true);