// Format paragraph text to appear as small capital letters in a document.

// How do I display lowercase letters as smaller uppercase letters in a paragraph in a document?

// Render all paragraph characters in a reduced capital letter style in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to small capitalized letters.");
paragraph.SetSmallCaps(true);