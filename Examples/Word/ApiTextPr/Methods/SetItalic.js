// This example sets the italic property to the text character.

// How to make a text italic.

// Create a text run object, change its properties by making it italic.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetItalic(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to italicized letters using the text properties.");