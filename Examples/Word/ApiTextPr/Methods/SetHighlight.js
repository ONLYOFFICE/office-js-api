// Apply a background highlight color to text in a document.

// How do I mark text with a colored background in a document?

// Draw attention to specific words by painting a highlight behind them in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");