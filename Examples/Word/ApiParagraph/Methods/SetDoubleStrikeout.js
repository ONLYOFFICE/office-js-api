// Specify that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line in a document.

// How to strike out a text with two lines in a document.

// Create a new paragraph and set double strikeout to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with two lines.");
paragraph.SetDoubleStrikeout(true);