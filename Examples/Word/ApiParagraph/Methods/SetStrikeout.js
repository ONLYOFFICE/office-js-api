// Draw a horizontal line through the text of a paragraph in a document.

// How do I display paragraph text with a line crossed through it in a document?

// Mark paragraph content as struck through with a single line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with a single line.");
paragraph.SetStrikeout(true);