// This example sets the italic property to the text character.

// How to make text italic.

// Create a paragraph and make its text style italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a text run with the font set to italicized letters.");
paragraph.SetItalic(true);