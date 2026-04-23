// Make all text in a paragraph bold in a document.

// How do I apply bold formatting to an entire paragraph in a document?

// Emphasize a paragraph's content by enabling bold weight on all its characters in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to bold.");
paragraph.SetBold(true);