// Apply a specific typeface to all text in a paragraph in a document.

// How do I change the font family used for a paragraph's text in a document?

// Switch a paragraph to a different typeface to match a desired visual style in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily("Consolas");