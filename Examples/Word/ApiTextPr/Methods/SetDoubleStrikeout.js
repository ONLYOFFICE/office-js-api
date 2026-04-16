// Specify that the contents of the run are displayed with two horizontal lines through each character displayed on the line in a document.

// How to strikethrough a text with two lines in a document.

// Create a text run object, double cross out it in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetDoubleStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with two lines using the text properties.");