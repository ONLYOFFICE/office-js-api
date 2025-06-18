// This example sets the font size to the characters of the paragraph.

// How to set font size to the text.

// Create a new paragraph and resize its font.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph with the font size set to 24 points.");
paragraph.SetFontSize(48);