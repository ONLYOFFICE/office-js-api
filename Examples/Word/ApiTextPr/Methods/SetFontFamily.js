// Set all 4 font slots with the specified font family in a document.

// How to change the text font family in a document.

// Create a text run object and set the "Comic Sans MS" font faminy to it in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");