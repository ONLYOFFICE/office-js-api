// Extract a text range from within an inline content control in a document.

// How do I select a specific portion of text inside an inline content control in a document?

// Apply bold formatting to a substring inside a content control by targeting its range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let range = inlineLvlSdt.GetRange(11, 16);
range.SetBold(true);