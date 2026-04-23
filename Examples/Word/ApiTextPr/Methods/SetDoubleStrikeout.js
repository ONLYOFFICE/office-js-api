// Draw two horizontal lines through the default text characters in a document.

// How do I cross out text with a double strikethrough in a document?

// Mark the default font with a double strikeout to visually indicate deleted or superseded content in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetDoubleStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with two lines using the text properties.");