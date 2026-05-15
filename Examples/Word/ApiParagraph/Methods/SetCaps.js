// Display all paragraph text in capital letters in a document.

// How do I make all letters in a paragraph appear as uppercase in a document?

// Apply all-caps formatting to turn lowercase letters into capitals throughout a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to capitalized letters.");
paragraph.SetCaps(true);