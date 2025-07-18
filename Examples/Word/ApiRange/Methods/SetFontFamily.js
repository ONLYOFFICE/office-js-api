// This example sets all 4 font slots with the specified font family.

// How to change the text font family.

// Create a text run object and set the "Comic Sans MS" font faminy to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
let range = doc.GetRange(22, 71);
range.SetFontFamily("Consolas");