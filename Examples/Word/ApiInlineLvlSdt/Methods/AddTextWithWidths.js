// Add Unicode code points with exact character widths to an inline content control in a document.

// How do I insert characters preserving their exact widths into an inline text content control in a document?

// Fill an inline content control with the "Widths" word so that every character keeps the width specified in millimeters.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
