// Set the amount of space between characters in a document.

// How do I increase or decrease the gap between letters in a document?

// Control how tightly or loosely characters are spaced along a line in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSpacing(80);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");