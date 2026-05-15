// Replace all text in a paragraph with a new string in a document.

// How do I overwrite the existing text of a paragraph in a document?

// Replace the original text with another text string.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the original text.");
paragraph.SetText("This is the replacement text.");
