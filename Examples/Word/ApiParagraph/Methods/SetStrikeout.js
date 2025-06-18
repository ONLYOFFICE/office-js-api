// This example specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.

// How to cross the paragraph with onle line.

// Create a paragraph with the text struck out with a single line.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with a single line.");
paragraph.SetStrikeout(true);