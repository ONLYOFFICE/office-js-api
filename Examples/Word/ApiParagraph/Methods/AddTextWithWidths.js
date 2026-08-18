// Add Unicode code points with exact character widths to a paragraph in a document.

// How do I insert characters preserving their exact widths into a paragraph in a document?

// Add the "Widths" word to a paragraph so that every character keeps the width specified in millimeters.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Fixed widths: ");
paragraph.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
