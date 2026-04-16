// Set all 4 font slots with the specified font family in a document.

// How to set font family to the text in a document.

// Create a paragraph and change its font family in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily("Consolas");