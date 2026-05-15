// Mark text with a strikeout line in a PDF.

// How do I draw a line through text in a PDF?

// Apply strikeout formatting to selected text in a PDF.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);