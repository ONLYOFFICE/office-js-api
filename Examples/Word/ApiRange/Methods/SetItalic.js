// Apply italic formatting to a range of text in a document.

// How do I make a portion of text appear in italic style in a document?

// Slant selected words into italic to add emphasis or distinguish them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetItalic(true);