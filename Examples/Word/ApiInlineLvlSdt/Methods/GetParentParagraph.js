// Retrieve the paragraph that holds an inline content control in a document.

// How do I get the paragraph that contains an inline content control in a document?

// Apply bold formatting to the entire paragraph that wraps an inline content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a parent paragraph. ");
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control added to the paragraph.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let parentParagraph = inlineLvlSdt.GetParentParagraph();
parentParagraph.SetBold(true);