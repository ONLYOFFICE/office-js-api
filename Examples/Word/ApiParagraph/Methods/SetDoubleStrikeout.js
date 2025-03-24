// This example specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line.

// How to strike out a text with two lines.

// Create a new paragraph and set double strikeout to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with two lines.");
paragraph.SetDoubleStrikeout(true);