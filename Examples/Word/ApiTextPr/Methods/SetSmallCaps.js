// Display lowercase letters as smaller capital letters in a document.

// How do I make text appear in small capitals without retyping it in a document?

// Give text a refined look by rendering all letters as reduced-size capitals in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSmallCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to small capitalized letters.");