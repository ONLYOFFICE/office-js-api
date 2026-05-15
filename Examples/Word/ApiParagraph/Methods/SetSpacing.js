// Set the character spacing for text in a paragraph in a document.

// How do I control the amount of space between characters in a paragraph in a document?

// Expand or compress the gaps between letters within a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.SetSpacing(2);