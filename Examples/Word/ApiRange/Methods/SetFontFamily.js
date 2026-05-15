// Apply a specific typeface to a range of text in a document.

// How do I change the font used for a portion of text in a document?

// Switch the appearance of selected words by assigning them a different typeface in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
let range = doc.GetRange(22, 71);
range.SetFontFamily("Consolas");