// Change the font family applied to text in a document.

// How do I apply a different typeface to text in a document?

// Switch all text to a specific font by updating the default text properties in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");