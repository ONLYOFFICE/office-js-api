// Display all lowercase letters as capitals without changing the underlying text in a document.

// How do I make text appear in all capital letters without retyping it in a document?

// Apply a visual-only capitals effect to the default text so readers see uppercase letters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text set to capital letters using the text properties.");