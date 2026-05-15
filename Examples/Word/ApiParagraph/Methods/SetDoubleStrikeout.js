// Draw two horizontal lines through every character in a paragraph in a document.

// How do I cross out paragraph text with a double strikethrough line in a document?

// Mark paragraph content as deleted or irrelevant using a double strikeout in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with two lines.");
paragraph.SetDoubleStrikeout(true);