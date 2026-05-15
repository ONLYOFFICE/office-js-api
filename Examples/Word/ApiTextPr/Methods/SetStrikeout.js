// Apply a strikethrough line to text in a document.

// How do I draw a horizontal line through the middle of text in a document?

// Mark text as deleted or deprecated by crossing it out in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with a single line.");