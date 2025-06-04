// This example specifies that the contents of the current run are displayed with a single horizontal line through the center of the line.

// How to strike out a text with one line.

// Create a text run object, cross out it.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with a single line.");