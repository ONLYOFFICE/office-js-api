// This example specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line.

// How to strikethrough a text with two lines.

// Create a text run object, double cross out it.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetDoubleStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with two lines using the text properties.");