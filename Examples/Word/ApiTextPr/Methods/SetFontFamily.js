// This example sets all 4 font slots with the specified font family.
	
// How to change the text font family.

// Create a text run object and set the "Comic Sans MS" font faminy to it.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");