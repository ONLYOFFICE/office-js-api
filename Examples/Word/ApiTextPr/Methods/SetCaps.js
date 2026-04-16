// Specify that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

// How to make text characters capitalized in a document.

// Create a text run object, update its style by making its letters capitalized in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text set to capital letters using the text properties.");